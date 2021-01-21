/** @format */

import axios from 'axios'
import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../constants/bookConstants'

export const fetchBooksData = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST
    })
    const { data } = await axios.get(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json'
    )

    localStorage.setItem('books',JSON.stringify(data))
    dispatch({
      type: FETCH_DATA_SUCCESS,

    })
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAIL,

    })
  }
}

export const getBookList = () => (dispatch) => {
  try {
    dispatch({ type: BOOK_LIST_REQUEST })

    const booksData = JSON.parse(localStorage.getItem('books'))

    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: booksData,
    })
  } catch (error) {
    dispatch({
      type: BOOK_LIST_FAIL,
    })
  }
}

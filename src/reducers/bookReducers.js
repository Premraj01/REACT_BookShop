/** @format */

import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../constants/bookConstants'

export const fetchDataReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { loading: true }
    case FETCH_DATA_SUCCESS:
      return { loading: false }
    case FETCH_DATA_FAIL:
      return { loading: false }

    default:
      return state
  }
}

export const bookListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return { loading: true, books: [] }
    case BOOK_LIST_SUCCESS:
      return { loading: false, books: action.payload || [] }
    case BOOK_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

/** @format */

import { CART_ADD_ITEM } from '../constants/bookConstants'
import {
  CART_LIST_REQUEST,
  CART_LIST_FAIL,
  CART_LIST_SUCCESS,
} from '../constants/cartConstants'

export const addToCart = (cartItems) => (dispatch) => {
  dispatch({
    type: CART_ADD_ITEM,
  })

  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const getCartList = () => (dispatch) => {
  try {
    dispatch({
      type: CART_LIST_REQUEST,
    })
    const data = JSON.parse(localStorage.getItem('cartItems'))
    dispatch({
      type: CART_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
    })
  }
}

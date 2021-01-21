/** @format */

import { CART_ADD_ITEM } from '../constants/bookConstants'
import {
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
} from '../constants/cartConstants'

export const cartAddReducer = (state = '', action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { success: true }
    default:
      return state
  }
}

export const cartListReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return { loading: true, cartItems: [] }
    case CART_LIST_SUCCESS:
      return { loading: false, cartItems: action.payload }
    case CART_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

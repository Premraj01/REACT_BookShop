/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { bookListReducer } from './reducers/bookReducers'
import { cartListReducer } from './reducers/cartReducer'

const reducer = combineReducers({
  bookList: bookListReducer,
  cartList: cartListReducer,
})

const initialState = {}

const middleware = [thunk]

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default Store

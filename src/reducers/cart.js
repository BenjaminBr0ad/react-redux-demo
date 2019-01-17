import {
  ADD_TO_CART
} from '../actions/cart.js'

const initialState = {
  cart: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
    let index = state.cart.findIndex(x => x.id === action.payload.id)
    if (index > -1) {
      let newBook = Object.assign({}, state.cart[index])
      newBook.quantity++
      return {
        ...state,
        cart: [...state.cart.slice(0,index), newBook, ...state.cart.slice(index+1)]
      }
    } else {
      let newBook = Object.assign({}, action.payload)
      newBook.quantity = 1
      return {
        ...state,
        cart: [...state.cart, newBook]
      }
    }

    default:
      return state
  }
}

import {
  ADD_TO_CART
} from '../actions/cart.js'

const initialState = {
  cart: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      let cart = state.cart
      console.log(cart);
      
      return {
        ...state,
        cart: cart
      }

    default:
      return state
  }
}

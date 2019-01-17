import {
  ADD_TO_CART
} from '../actions/cart.js'

const initialState = {
  cart: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
    console.log('reducer:',action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    default:
      return state
  }
}

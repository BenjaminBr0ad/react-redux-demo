export const ADD_TO_CART = "ADD_TO_CART"


export const addToCart = (book) => {
  console.log('Adding item to cart', book);
  return {
    type: ADD_TO_CART,
    payload: book
  }
}

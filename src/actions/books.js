export const LOAD_BOOKS = "LOAD_BOOKS"

const API = 'https://benjamin-broad-collective-api.herokuapp.com/api/'

export const loadBooks = () => {
  return async dispatch => {
    const response = await fetch(`${API}/books`)
    const books = await response.json()
    dispatch({
      type: LOAD_BOOKS,
      payload: books
    })
  }
}

import {
  LOAD_BOOKS
} from '../actions/books.js'

const initialState = {
  books: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_BOOKS:
      return {
        ...state,
        books: action.payload
      }

    default:
      return state
  }
}

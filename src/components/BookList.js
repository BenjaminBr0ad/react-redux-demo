import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadBooks } from '../actions/books'
import Book from './Book'

class BookList extends Component {

  async componentDidMount() {
    this.props.loadBooks()
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map(book => {
            return (
              <Book
                key={book.id}
                book={book}
              />
            )
          })}

        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    books: state.books.books
  }
  return props
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadBooks
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

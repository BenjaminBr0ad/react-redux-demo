import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'
import { bindActionCreators } from 'redux'

class Book extends Component {
  render() {
    const {
      book,
      addToCart,
      book: {
        title,
        author,
        price
      }
    } = this.props
    return (
      <tr>
        <th scope="row">{title}</th>
        <td>{author}</td>
        <td>${price}.00</td>
        <td><button onClick={(e) => addToCart(book)} type="button" className="btn btn-info">Add</button></td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Book)

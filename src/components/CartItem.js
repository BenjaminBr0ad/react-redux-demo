import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartItem extends Component {
  render() {

    const {
      item
    } = this.props

    return (
      <tr>
        <th scope="row">{item.title}</th>
        <td>{item.quantity}</td>
        <td>${item.price * item.quantity}.00</td>
      </tr>
    )
  }
}

export default connect(
  null,
  null
)(CartItem)

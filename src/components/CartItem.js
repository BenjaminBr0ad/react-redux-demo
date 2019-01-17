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
        <td>${item.price}.00</td>
        <td>{item.quantity}</td>
      </tr>
    )
  }
}

export default connect(
  null,
  null
)(CartItem)

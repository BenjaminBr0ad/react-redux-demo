import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'

class Cart extends Component {

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart ? this.props.cart.map(cartItem => {
            return (
              <CartItem
                key={cartItem.id}
                item={cartItem}
              />
            )
          }) : null}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    cart: state.cart.cart
  }
  return props
}


export default connect(
  mapStateToProps,
  null
)(Cart)

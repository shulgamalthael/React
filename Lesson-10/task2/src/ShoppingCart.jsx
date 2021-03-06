import React from 'react';

import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: '1', name: 'iPhone 11', price: 999 },
        { id: '2', name: 'iPad Pro', price: 799 },
        { id: '3', name: 'Apple Watch siries 5', price: 777 },
        { id: '4', name: 'Air Pods', price: 550 },
         { id: '5', name: 'MacBook Pro', price: 2000 },
      ]
    }
  }
  render() {
    return (
      <div className="column" >
        <CartTitle userName={this.props.userName} count={this.state.cartItems.length} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    )
  }
}
export default ShoppingCart;
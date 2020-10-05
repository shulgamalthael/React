import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductList';

class ShoppingCart extends React.Component {
    state = {
        cartItems: [
            {
                id: '1',
                name: 'Iphone 11',
                price: 999,
            },
            {
                id: '2',
                name: 'iPad Pro',
                price: 799,
            }
        ]
    }

    render() {
        const count = this.state.cartItems.length;
    return(
        <div class="column">
            <CartTitle userName={this.props.userName.firstName} count={count} />
            <ProductsList cartItems={this.state.cartItems} />
        </div>
    );
    }
}

export default ShoppingCart;
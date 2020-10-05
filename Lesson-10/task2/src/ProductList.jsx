import React from 'react';

class ProductList extends React.Component{

    render() {

        const total = this.props.cartItems.reduce(
            (acc, item) => acc + item.price,
                0,
            );

    return(
        <div className="products">
            <ul className="products__list">
                {this.props.cartItems.map(({ name, price, id }) => (
                    <li key={id} className="products__list-item">
                        <span className="products__item-name">{name}</span>
                        <span className="products__item-price">{`$${price}`}</span>
                    </li>
                ))}
            </ul>
            <div className="products__total">{total}</div>
        </div>
    );
    }
}

export default ProductList;
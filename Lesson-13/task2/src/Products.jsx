import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Product from './Product';

function Products() {
    return(
        <div className="page__content">
            <h1>Products</h1>
            <ul class="navigation">
                <li class="navigation__item">
                    <Link to="/products/book">Book</Link>
                </li>
                <li class="navigation__item">
                    <Link to="/products/ball">Ball</Link>
                </li>
            </ul>
                    <Route>
                        <Product path="/products/:productId" />
                    </Route>
                    <Route exact path="/products">
                        <span>Select a product please</span>
                    </Route>
        </div>
    )
}

export default Products;
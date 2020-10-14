import React from 'react';
import Home from './Home';
import Products from './Products';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <div class="page">
                <BrowserRouter>
                <ul class="navigation">
                    <li class="navigation__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="navigation__item">
                        <Link to="/products">Products</Link>
                    </li>
                </ul>

            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
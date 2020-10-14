import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';

class App extends React.Component {
    render() {
        return(
            <div class="page">
                <BrowserRouter>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="/pagenotfound">
                    <PageNotFound />
                </Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
import React from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
    state = {
        userData: {
            firstName: 'Tom',
            lastName: 'Form'
        }
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        });
    }

    render() {

        return(
            <div class="page">
                <h1 class="title">Hello, John Doe</h1>
                <main class="content">
                    <ShoppingCart userName={this.state.userData} />
                    <Profile userData={this.state.userData} handleChange={this.handleChange} />
                </main>
            </div>
        );
    }
}

export default App;
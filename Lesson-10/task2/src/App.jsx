import React from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
    state = {
        userData: {
            firstName: 'Nikita',
            lastName: 'Shulha'
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
            <div className="page">
                <h1 className="title">Hello, {this.state.userData.firstName}</h1>
                <main className="content">
                    <ShoppingCart userName={this.state.userData} />
                    <Profile userData={this.state.userData} handleChange={this.handleChange} />
                </main>
            </div>
        );
    }
}

export default App;
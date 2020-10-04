import React from 'react';
import ReactDOM from 'react-dom';
import UserFrom from './UserForm';
import './index.scss';

ReactDOM.render(
    <UserFrom onSubmit={this.createUser} />,
    document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList';

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumbersList numbers={numbers} />,
    document.querySelector('#root')
);
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const containerElement = (
    <div className="greeting">
        <div className="greeting__title">Hello, world!</div>
        <div className="greeting__text">I'm learning React</div>
    </div>
);

ReactDOM.render(containerElement, rootElement);
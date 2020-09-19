import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const rootElement = document.querySelector('#root');

const renderSeconds = time => {
const seconds = new Date(time).getSeconds();
const backgroundColor = seconds % 2 === 0
  ? 'red'
  : 'black';

const textColor = seconds % 2 !== 0
  ? 'red'
  : 'black';

const borderColor = seconds % 2 === 0
  ? '0.5px solid black'
  : '0.5px solid red';

const style = {
  color: textColor,
  backgroundColor,
  border: borderColor
}

const element = (
  <div 
    className = "seconds"
    style = {style}
  >
    Now is {seconds}
  </div>
);

  ReactDOM.render(element, rootElement);
};

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 500);
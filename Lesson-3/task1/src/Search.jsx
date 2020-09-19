import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

export const Search = (props) => {
const element = (
  <div class="search">
      <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
      <div className="search__field">
          <input type="text" className="search__input" />
          <button className="search__button">Search</button>
      </div>
  </div>
);

return element;
};

ReactDOM.render(<Search name="Nikita" />, rootElement);
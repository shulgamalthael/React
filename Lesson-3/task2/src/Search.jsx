import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';

 /* export default function Search(props) {
    // console.log(props)
    return (
        <div className='searh'>
            <h1 className='search__title'>{`Hello, ${props.name}. What to search for you?`}</h1>
            <div className='search__field'>
                <input type='text' className='search__input' />
                <button className='search__button'>Search</button>
            </div>
        </div>
    );
}; */

export default class Search extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='searh'>
            <h1 className='search__title'>{`Hello, ${this.props.name}. What to search for you?`}</h1>
            <div className='search__field'>
                <input type='text' className='search__input' />
                <button className='search__button'>Search</button>
            </div>
        </div>
        );
    }
}

// export default Search;
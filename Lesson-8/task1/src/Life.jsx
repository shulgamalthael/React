import React, {Component} from 'react';

class Life extends Component {
    constructor(props) {
        super(props);
        console.log('constructor: good place to create state');
    }

    componentDidMount() {
        console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
        return nextProps.number % 2;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
    }

    render() {
        console.log('return React element to build DOM');
    return <div className="number"></div>
    }
}

export default Life;
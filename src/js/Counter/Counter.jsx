import React, { Component } from 'react';

export default class Counter extends Component {
    constructor () {
        super();
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    };

    render () {
        return <button onClick={this.handleClick}>Click me {this.state.count}</button>;
    }
}

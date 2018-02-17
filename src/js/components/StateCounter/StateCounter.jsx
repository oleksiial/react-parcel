import './StateCounter.scss';
import React, { Component } from 'react';

export default class StateCounter extends Component {
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
        return <button className={'state-counter'} onClick={this.handleClick}>Click me {this.state.count}</button>;
    }
}

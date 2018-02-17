/* global clearInterval */

import './Clock.scss';
import React, { Component } from 'react';

export default class Clock extends Component {
    constructor () {
        super();
        this.state = {
            time: Date.now()
        };
    }

    componentDidMount () {
        this.timer = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render () {
        let time = new Date(this.state.time).toLocaleTimeString();
        return <div className={'clock'}>{ time }</div>;
    }
}

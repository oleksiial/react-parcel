import './ReduxCounter.scss';
import { addCount } from '../../redux/actions/counter.js';
import { connect } from 'react-redux';
import React from 'react';

const ReduxCounter = ({count, handleClick}) => {
    return <button className={'redux-counter'} onClick={handleClick}>Redux me {count}</button>;
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(addCount())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);

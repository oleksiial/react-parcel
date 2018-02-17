import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Clock from '../Clock';
import { hot } from 'react-hot-loader';
import React from 'react';
import ReduxCounter from '../ReduxCounter';
import StateCounter from '../StateCounter';

const App = () => <Router>
    <div>
        <h1>Setting up React with Parcel bundler!</h1>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/state-counter'>StateCounter</Link>
            <Link to='/redux-counter'>ReduxCounter</Link>
        </div>
        <Route exact path='/' component={Clock}/>
        <Route path='/state-counter' component={StateCounter}/>
        <Route path='/redux-counter' component={ReduxCounter}/>
    </div>
</Router>;

export default hot(module)(App);

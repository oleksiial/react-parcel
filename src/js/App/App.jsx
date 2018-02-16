import Clock from '../Clock/Clock.jsx';
import Counter from '../Counter/Counter.jsx';
import { hot } from 'react-hot-loader';
import React from 'react';

const App = () => (<div>
    <h1>Setting up React with Parcel bundler!</h1>
    <Clock/>
    <Counter/>
</div>);

export default hot(module)(App);

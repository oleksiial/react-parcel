import Clock from '../Clock';
import { hot } from 'react-hot-loader';
import React from 'react';
import ReduxCounter from '../ReduxCounter';
import StateCounter from '../StateCounter';

const App = () => <div>
    <h1>Setting up React with Parcel bundler!</h1>
    <Clock/>
    <StateCounter/>
    <ReduxCounter/>
</div>;

export default hot(module)(App);

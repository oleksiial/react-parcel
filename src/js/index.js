import App from './components/App';
import configureStore from './redux/configureStore.js';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

const store = configureStore({});

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
);

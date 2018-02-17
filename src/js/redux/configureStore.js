import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';

export default function (initialState = {}) {
    const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

    // works only with webpack
    // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
    // if (module.hot) {
    //     module.hot.accept(() => {
    //         const nextRootReducer = require('./reducers/index').default;
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }
    // return store;

    // https://github.com/parcel-bundler/parcel/issues/314
    if (window.store == null) {
        window.store = store;
        return window.store;
    }
    if (process.env.NODE_ENV === 'development') {
        const nextRootReducer = require('./reducers').default;
        window.store.replaceReducer(nextRootReducer);
    }
    return window.store;
}

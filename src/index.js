import React from 'react'
import ReactDOM from 'react-dom'

import {
    createStore,
    applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Provider } from 'react-redux';


import App from './app/App'
import rootReducer from './reducers';
import './index.css'



const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
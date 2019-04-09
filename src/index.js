import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import configureStore from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as ApiUtil from './util/api_utils';

window.request_user_stats = ApiUtil.request_user_stats

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()

    ReactDOM.render(<App store={ store } />, document.getElementById('root'));
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

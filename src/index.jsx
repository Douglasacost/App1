// Importing npm packages
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();

// importing custom packages
import reducers from './reducers';
import { setState } from './actions/Actions';
import state from './State';
import routes from './Routes';
//socket
import io from 'socket.io-client';
import remoteActionMiddleware from './remote_action_middleware';
// importing css
require("./assets/stylesheets/app.scss");

injectTapEventPlugin();


//beg
const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  {
    return store.dispatch(setState(state))
  }
);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducers);
//end

store.dispatch(setState(state));
render(
        <Provider store={store}>
            <Router history={newHistory}>{routes}</Router>
        </Provider>,
    document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import routes from './routes'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { Router, browserHistory } from 'react-router'
import rootReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'

const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);

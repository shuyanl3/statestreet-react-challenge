import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk';
import AccountList from './container/AccountList';
import TransactionDetail from './component/TransactionDetail'
import allReducer from './redux/index'

const store = createStore(allReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={AccountList} />
            <Route path="/:account" component={TransactionDetail} />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

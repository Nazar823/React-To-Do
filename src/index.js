import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reducers/index'
import { Provider } from 'react-redux'
import {Router} from "react-router";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
ReactDOM.render(
      <Provider store={store}>
          <Router history={history}>
              <App />
          </Router>
      </Provider>,
  document.getElementById('root')
);


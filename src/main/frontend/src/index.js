import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { MuiThemeProvider } from '@material-ui/core/';

import './assets/css/App.css';

import App from './app/App';
import reducers from './redux/reducers';
import { theme } from './assets/jss';

const store = createStore(reducers, {}, applyMiddleware(promiseMiddleware, reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

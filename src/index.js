import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import { fetchCards } from './redux/actions'

let newStore = store();

newStore.dispatch(fetchCards())

ReactDOM.render(
  <Provider store = { newStore }>
    <App />
  </Provider>
  , document.getElementById('root'));

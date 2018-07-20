import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import cards from './reducers/cards_reducer'
import messages from './reducers/messages'
import users from './reducers/users'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import handleNewMessage from './sagas'
import setupSocket from './sockets'
import username from './utils/name'
import {fetchCards} from './actions/index'
import 'bootswatch/dist/sandstone/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cards,
  messages,
  users
})

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger, thunk)
)

store.dispatch(fetchCards())

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import cards from './reducers/cards_reducer'
import messages from './reducers/messages'
import users from './reducers/users'

const rootReducer = combineReducers({
  cards,
  messages,
  users
})

const middleWare = [thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleWare))

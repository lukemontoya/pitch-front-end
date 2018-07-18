import { createStore, combineReducers, applyMiddleware } from 'redux'
import cards from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  cards
})

const middleWare = [thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleWare))

import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import cards from './cards_reducer'

const chat = combineReducers({
  messages,
  users,
  cards
})

export default chat

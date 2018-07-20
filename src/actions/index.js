import axios from 'axios'
import * as types from '../constants/ActionTypes'

export const FETCH_CARDS = "FETCH_CARDS"


let nextMessageId = 0
const nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export const fetchCards = () => {
  return dispatch => {
    axios
      .get('http://localhost:8000/cards')
      .then(response => {dispatch({
          type: FETCH_CARDS,
          payload: response.data
      })
    })
  }
}

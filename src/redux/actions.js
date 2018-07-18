import axios from 'axios'

export const FETCH_CARDS = "FETCH_CARDS"


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

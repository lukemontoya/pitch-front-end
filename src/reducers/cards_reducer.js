import { FETCH_CARDS } from '../actions/index.js'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return [...action.payload]

    default:
      return state;
  }
}

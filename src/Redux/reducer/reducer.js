import { ADD_TO_BASKET } from "./type";

const initialState = {
  basket: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: action.basket
      }
    default:
      return state
  }
}

export default reducer
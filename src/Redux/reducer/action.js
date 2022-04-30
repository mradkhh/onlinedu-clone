import { ADD_TO_BASKET } from "./type";

export const addToBasket = (basket) => {
  return {
    type: ADD_TO_BASKET,
    basket
  }
}
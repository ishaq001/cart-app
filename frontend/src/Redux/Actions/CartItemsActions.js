import {
  ADD_IN_CART,
  DECREASE_QUANTITY,
  EMPTY_CART,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../Constants/Constants";

export const addInCart = (id) => {
  return {
    type: ADD_IN_CART,
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

import {
  ADD_IN_CART,
  ADD_ITEMS_FAIL,
  ADD_ITEMS_REQ,
  ADD_ITEMS_SUCCESS,
  DECREASE_QUANTITY,
  EMPTY_CART,
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_REQ,
  FETCH_ITEMS_SUCCESS,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../Constants/Constants";
import { addIncart, removeFromCart } from "./ReducerFunctions/AddRemoveCart";
import {
  decreaseQuantity,
  increaseQuantity,
} from "./ReducerFunctions/IncDecQuantity";

const initialState = {
  items: [],
  loading: false,
  error: "",

  addedInCart: [],
  cartCount: 0,
  totalPrice: 0,
};

//Reducer
export const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...action.payload],
        error: "",
      };
    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };

    //addItems
    case ADD_ITEMS_REQ:
      return {
        ...state,
        loading: true,
      };
    case ADD_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
        error: "",
      };
    case ADD_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //cart
    case ADD_IN_CART:
      return addIncart(state, action);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action);
    case INCREASE_QUANTITY:
      return increaseQuantity(state, action);
    case DECREASE_QUANTITY:
      return decreaseQuantity(state, action);
    case EMPTY_CART:
      return {
        ...state,
        addedInCart: [],
        totalPrice: 0,
        cartCount: 0,
      };

    default:
      return state;
  }
};

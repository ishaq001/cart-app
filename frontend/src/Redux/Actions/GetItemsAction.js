import {
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_REQ,
  FETCH_ITEMS_SUCCESS,
} from "../Constants/Constants";
import axios from "axios";

const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQ,
  };
};

const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

const fetchItemsFail = (error) => {
  return {
    type: FETCH_ITEMS_FAIL,
    payload: error,
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest);
    axios
      .get("http://localhost:3000/items")
      .then((res) => {
        const items = res.data;
        dispatch(fetchItemsSuccess(items));
      })
      .catch((error) => {
        dispatch(fetchItemsFail(error.message));
      });
  };
};

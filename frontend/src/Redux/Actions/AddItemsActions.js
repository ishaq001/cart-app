import axios from "axios";
import {
  ADD_ITEMS_FAIL,
  ADD_ITEMS_REQ,
  ADD_ITEMS_SUCCESS,
} from "../Constants/Constants";

const addItemsRequest = () => {
  return {
    type: ADD_ITEMS_REQ,
  };
};

const addItemsSuccess = (items) => {
  return {
    type: ADD_ITEMS_SUCCESS,
    payload: items,
  };
};

const addItemsFail = (error) => {
  return {
    type: ADD_ITEMS_FAIL,
    payload: error,
  };
};

export const addItems = (name, price, imgUrl) => {
  return (dispatch) => {
    dispatch(addItemsRequest);

    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      name: name,
      price: price,
      img: imgUrl,
    };

    axios
      .post("http://localhost:3000/items", data, {
        headers: headers,
      })
      .then((response) => {
        const items = response.data;
        dispatch(addItemsSuccess(items));
      })
      .catch((error) => {
        dispatch(addItemsFail(error.message));
      });
  };
};

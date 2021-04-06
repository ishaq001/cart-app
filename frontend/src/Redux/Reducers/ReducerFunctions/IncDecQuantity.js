export const increaseQuantity = (state, action) => {
  let addedItem = state.addedInCart.find((item) => item.id === action.payload);
  addedItem.quantity += 1;
  let newTotal = Number(state.totalPrice) + Number(addedItem.price);
  return {
    ...state,
    cartCount: state.cartCount + 1,
    totalPrice: newTotal,
  };
};

//increaseQuantity
export const decreaseQuantity = (state, action) => {
  let removeItem = state.addedInCart.find((item) => item.id === action.payload);
  //if the qt == 0 then it should be removed
  if (removeItem.quantity === 1) {
    let new_items = state.addedInCart.filter(
      (item) => item.id !== action.payload
    );
    let newTotal = Number(state.totalPrice) - Number(removeItem.price);
    return {
      ...state,
      cartCount: state.cartCount - 1,
      addedInCart: new_items,
      totalPrice: newTotal,
    };
  } else {
    removeItem.quantity -= 1;
    let newTotal = Number(state.totalPrice) - Number(removeItem.price);
    return {
      ...state,
      cartCount: state.cartCount - 1,
      totalPrice: newTotal,
    };
  }
};

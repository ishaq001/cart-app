//add in cart
export const addIncart = (state, action) => {
  let addedItem = state.items.find((item) => item.id === action.payload);

  let existed_item = state.addedInCart.find(
    (item) => action.payload === item.id
  );
  if (existed_item) {
    addedItem.quantity += 1;
    return {
      ...state,
      cartCount: state.cartCount + 1,
      totalPrice: Number(state.totalPrice) + Number(addedItem.price),
    };
  } else {
    addedItem.quantity = 1;
    let newTotal = Number(Number(state.totalPrice)) + Number(addedItem.price);

    return {
      ...state,
      cartCount: state.cartCount + 1,
      addedInCart: [...state.addedInCart, addedItem],
      totalPrice: newTotal,
    };
  }
};

//Remove From Cart
export const removeFromCart = (state, action) => {
  let itemToRemove = state.addedInCart.find(
    (item) => action.payload === item.id
  );
  let new_items = state.addedInCart.filter(
    (item) => action.payload !== item.id
  );
  //calculating the total
  let newTotal =
    Number(state.totalPrice) -
    Number(itemToRemove.price) * Number(itemToRemove.quantity);
  return {
    ...state,
    cartCount: state.cartCount - itemToRemove.quantity,
    addedInCart: new_items,
    totalPrice: newTotal,
  };
};

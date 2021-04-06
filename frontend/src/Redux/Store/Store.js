import { createStore, applyMiddleware } from "redux";
import { ShoppingReducer } from "../Reducers/ShoppingReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
export function loadFromLocalStorage() {
  try {
    let serialisedState = localStorage.getItem("persistantState");

    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const persistedCartState = loadFromLocalStorage();

const store = createStore(
  ShoppingReducer,
  persistedCartState,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;

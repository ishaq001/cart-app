import ShoppingItems from "./components/ShoppingStore/ShoppingItems";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import AddItems from "./components/AddItems/AddItems";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/store" component={ShoppingItems} />
        <Route path="/cart" component={Checkout} />
        <Route path="/add" component={AddItems} />
      </Switch>
    </div>
  );
}

export default App;

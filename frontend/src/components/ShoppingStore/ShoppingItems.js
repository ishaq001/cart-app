import React, { useEffect } from "react";
import { fetchItems } from "../../Redux/Actions/GetItemsAction";
import "./ShoppingItems.css";
import { connect } from "react-redux";
import { addInCart } from "../../Redux/Actions/CartItemsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//saving local state

const ShoppingItems = ({ fetchItems, items, addInCart, cartCount }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className="main">
      <div className="heading">
        <h1>Shopping Store</h1>
      </div>

      <div className="items-section">
        {items &&
          items.map((item) => {
            return (
              <div key={item.id} className="item">
                <img
                  src={
                    item.img.includes("http")
                      ? item.img
                      : `http://localhost:3000/${item.img}`
                  }
                  alt="items"
                />
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                <button
                  onClick={() => {
                    addInCart(item.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
      {/* cartIcon */}
      <div className="cart">
        <Link to="/cart">
          <p></p>
        </Link>
      </div>

      <div className="links-store">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/add">
          <span>Add Items</span>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="cart-count"> {cartCount}</div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    cartCount: state.cartCount,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    addInCart: (id) => dispatch(addInCart(id)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ShoppingItems);

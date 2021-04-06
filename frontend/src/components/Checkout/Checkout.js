import React from "react";
import { connect } from "react-redux";
import {
  decreaseQuantity,
  emptyCart,
  increaseQuantity,
  removeFromCart,
} from "../../Redux/Actions/CartItemsActions";
import "./Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button, Card, Row } from "react-bootstrap";

const Checkout = ({
  cartItemsArray,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  totalPrice,
  emptyCart,
}) => {
  return (
    <div className="checkout-main checkout-content">
      <div className="checkout-heading">
        <h1>Checkout</h1>
        {cartItemsArray.length >= 1 && <p>The items in your cart:</p>}
      </div>
      <div className="checkout-section">
        {cartItemsArray.length > 0 ? (
          cartItemsArray &&
          cartItemsArray.map((item) => {
            return (
              <Row key={item.id} className="item">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      item.img.includes("http")
                        ? item.img
                        : `http://localhost:3000/${item.img}`
                    }
                    alt="items"
                    height="100"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: {item.price}</Card.Text>
                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                    <div className="inc-dec-btn">
                      <Link to="/cart">
                        <FontAwesomeIcon
                          onClick={() => decreaseQuantity(item.id)}
                          icon={faArrowDown}
                        />
                      </Link>

                      <Link to="/cart">
                        <FontAwesomeIcon
                          onClick={() => increaseQuantity(item.id)}
                          icon={faArrowUp}
                        />
                      </Link>
                    </div>
                    <Button onClick={() => removeFromCart(item.id)}>
                      Remove from Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Row>
            );
          })
        ) : (
          <div className="empty-cart">
            <p>The cart is empty</p>
            <p>
              Please go to{" "}
              <Link to="/store">
                <b>Store</b>
              </Link>{" "}
              to add some items in cart.
            </p>
          </div>
        )}
      </div>

      <div className="store-link">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/store">
          <span>Shopping Store</span>
        </Link>
      </div>

      {/* checkout */}
      {cartItemsArray.length >= 1 && (
        <div className="checkout">
          <Card>
            <Card.Header as="h5">Checkout</Card.Header>
            <Card.Body>
              <Card.Text>
                Your grand total: <b>{totalPrice}</b>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  emptyCart();
                  alert("Thanks for Shopping");
                }}
              >
                Checkout
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemsArray: state.addedInCart,
    totalPrice: state.totalPrice,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
    emptyCart: () => dispatch(emptyCart()),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Checkout);

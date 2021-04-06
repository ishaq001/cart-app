import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addItems } from "../../Redux/Actions/AddItemsActions";
import { connect } from "react-redux";
import "./AddItems.css";
import { Link } from "react-router-dom";

const AddItems = ({ addItems }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <div className="pt-5">
        <h1>Add Items</h1>
      </div>
      <div className="d-flex justify-content-center ">
        <Form className="w-50 mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Item Name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              value={imgUrl}
              type="text"
              onChange={(e) => setImgUrl(e.target.value)}
              placeholder="Enter Image URL"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addItems(name, price, imgUrl);
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
      <div className="store-link">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/store">
          <span>Shopping Store</span>
        </Link>
      </div>
    </>
  );
};

const mapDisptachToProps = (dispatch) => {
  return {
    addItems: (name, price, imgUrl) => dispatch(addItems(name, price, imgUrl)),
  };
};

export default connect(null, mapDisptachToProps)(AddItems);

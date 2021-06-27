import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clear, toggle } from "../store/cartSlice";
import { Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isSaved, setIsSaved] = useState(false);
  const reducer = (sum, item) => sum + item.price * item.amount;

  const checkoutHandler = async () => {
    const data = cart.items.map((item) => {
      return { _id: item._id, amount: item.amount };
    });
    const response = await fetch("http://localhost:9000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: data, customerName: user.email }),
    });
    setIsSaved(await response.json());
    dispatch(clear());
  };

  return (
    <Modal show={cart.visible} onHide={() => dispatch(toggle())}>
      <Modal.Header closeButton>
        <Modal.Title>{user && user.nickname}'s Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.items.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
        <h4 className="text-center bg-light p-4">
          Total: {cart.items.length && cart.items.reduce(reducer, 0).toFixed(2)}
          $
        </h4>
        {isSaved && (
          <p className="text-center">
            Thank you! The order has been sent successfuly.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={checkoutHandler}>
          Checkout
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch(toggle());
            setIsSaved(false);
          }}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;

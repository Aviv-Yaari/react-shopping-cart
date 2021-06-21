import CartData from "../cart-data";
import { Modal } from "react-bootstrap";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const reducer = (sum, item) => sum + item.price * item.amount;
  const cart = useContext(CartData);
  return (
    <Modal show={cart.visible} onHide={cart.toggleVisi}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.items.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
        <h4 className="text-center bg-light p-4">
          Total: {cart.items.length && cart.items.reduce(reducer, 0).toFixed(2)}
          $
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={cart.toggleVisi}>
          Checkout
        </button>
        <button className="btn btn-secondary" onClick={cart.toggleVisi}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;

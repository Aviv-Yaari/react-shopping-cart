import CartData from "../cart-data";
import { useContext } from "react";

const CartItem = (props) => {
  const cart = useContext(CartData);

  const addHandler = () => {
    cart.addItem(props.item);
  };
  const removeHandler = () => {
    cart.removeItem(props.item);
  };
  return (
    <div className="mb-5 bg-light p-5 d-flex align-items-center justify-content-between">
      <div>
        <h4>{props.item.name}</h4>
        <div className="fw-bolder">{props.item.price}$</div>
      </div>
      <div>
        <div>
          Amount:{" "}
          {(cart.findItem(props.item) && cart.findItem(props.item).amount) ||
            "0"}
        </div>
        <button className="btn btn-primary" onClick={addHandler}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={removeHandler}>
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;

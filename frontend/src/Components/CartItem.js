import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clear, toggle } from "../store/cartSlice";
import { useContext } from "react";

const CartItem = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const item = cart.items.find((item) => item._id === props.item._id);

  const addHandler = () => {
    dispatch(addItem(props.item));
  };
  const removeHandler = () => {
    dispatch(removeItem(props.item));
  };
  return (
    <div className="mb-5 bg-light p-5 d-flex align-items-center justify-content-between">
      <div>
        <h4>{props.item.name}</h4>
        <div className="fw-bolder">{props.item.price}$</div>
      </div>
      <div>
        <div>
          Amount:
          {(item && item.amount) || "0"}
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

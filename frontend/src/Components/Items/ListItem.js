import { useContext } from "react";
import CartData from "../../store/cart-data";

const ListItem = (props) => {
  const cart = useContext(CartData);

  const addHandler = () => {
    cart.addItem(props.item);
  };
  const removeHandler = () => {
    cart.removeItem(props.item);
  };

  const cartItem =
    cart.items.find((item) => item._id === props.item._id) &&
    cart.items.find((item) => item._id === props.item._id).amount;

  return (
    <div className="mb-5 bg-light p-5 d-flex align-items-center justify-content-between">
      <div>
        <h4>{props.item.name}</h4>
        <div className="font-italic">{props.item.desc}</div>
        <div className="fw-bolder">{props.item.price}$</div>
      </div>
      <div>
        <div>Amount: {cartItem || "0"}</div>
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

export default ListItem;

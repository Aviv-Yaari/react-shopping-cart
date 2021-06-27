import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => {
    return state.cart.items.find((item) => item._id === props.item._id);
  });

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
        <div className="font-italic">{props.item.desc}</div>
        <div className="fw-bolder">{props.item.price}$</div>
      </div>
      <div>
        <div>Amount: {(item && item.amount) || "0"}</div>
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

import React, { useState } from "react";

const CartData = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  findItem: () => {},
  show: () => {},
  visible: false,
});

export const CartDataProvider = (props) => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);

  const addToArr = (inputItem, inputArr) => {
    let found = false;
    let newArr = inputArr.map((item) => {
      if (item.id === inputItem.id) {
        found = true;
        item.amount = item.amount + 1;
      }
      return item;
    });

    if (!found) newArr = [...inputArr, { ...inputItem, amount: 1 }];
    return newArr;
  };

  const addItem = (item) => {
    setItems((oldArr) => addToArr(item, oldArr));
  };

  const removeFromArr = (inputItem, inputArr) => {
    return inputArr.filter((item) => {
      if (item.id === inputItem.id) {
        item.amount--;
      }
      return !(item.id === inputItem.id && item.amount === 0);
    });
  };

  const removeItem = (item) => {
    setItems((oldArr) => removeFromArr(item, oldArr));
  };

  const findItem = (inputItem) => {
    return items.find((item) => item.id === inputItem.id);
  };

  const toggleVisi = () => {
    setVisible(!visible);
  };

  return (
    <CartData.Provider
      value={{ items, addItem, removeItem, findItem, toggleVisi, visible }}
    >
      {props.children}
    </CartData.Provider>
  );
};

export default CartData;

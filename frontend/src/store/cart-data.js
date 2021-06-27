import React, { useState } from "react";

const CartData = React.createContext({
  items: [],
  setItems: () => {},
  addItem: () => {},
  removeItem: () => {},
  findItem: () => {},
  show: () => {},
  visible: false,
});

export const CartDataProvider = (props) => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);

  // Add item to cart:
  const addItem = (inputItem) => {
    setItems((itemsArr) => {
      let newArr;
      const index = itemsArr.findIndex((item) => item._id === inputItem._id);
      if (index === -1) {
        newArr = [...itemsArr, { ...inputItem, amount: 1 }];
      } else {
        itemsArr[index].amount++;
        newArr = [...itemsArr];
      }
      return newArr;
    });
  };

  // Remove item from cart:
  const removeFromArr = (inputItem, inputArr) => {
    return inputArr.filter((item) => {
      if (item._id === inputItem._id) {
        item.amount--;
      }
      return !(item._id === inputItem._id && item.amount === 0);
    });
  };

  const removeItem = (item) => {
    setItems((oldArr) => removeFromArr(item, oldArr));
  };

  const findItem = (inputItem) =>
    items.find((item) => item._id === inputItem._id);

  const toggleVisi = () => {
    setVisible(!visible);
  };

  return (
    <CartData.Provider
      value={{
        items,
        setItems,
        addItem,
        removeItem,
        findItem,
        toggleVisi,
        visible,
      }}
    >
      {props.children}
    </CartData.Provider>
  );
};

export default CartData;

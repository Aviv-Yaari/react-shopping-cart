import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    visible: false,
  },
  reducers: {
    addItem: (state, action) => {
      const inputItem = action.payload;
      const index = state.items.findIndex((item) => item._id === inputItem._id);
      if (index === -1) state.items.push({ ...inputItem, amount: 1 });
      else state.items[index].amount++;
    },
    removeItem: (state, action) => {
      const inputItem = action.payload;
      state.items = state.items.filter((item) => {
        if (item._id === inputItem._id) {
          item.amount--;
        }
        return item.amount !== 0;
      });
    },
    clear: (state) => {
      state.items = [];
    },
    toggle: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { addItem, removeItem, clear, toggle } = cartSlice.actions;

export default cartSlice.reducer;

const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      amount: Number,
    },
  ],
  customerName: String,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

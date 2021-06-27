const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
});
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

const Item = require("./models/Item");
const Cart = require("./models/Cart");
const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/react-meals`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose connection error:"));
db.once("open", function () {
  console.log("Mongoose connected.");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/items", async (req, res) => {
  const allItems = await Item.find();
  res.send(allItems);
});

app.post("/cart", async (req, res) => {
  const { items, customerName } = req.body;
  const cart = new Cart({ items, customerName });
  const isSaved = await cart.save();
  res.send(isSaved === cart);
});

app.post("/test", async (req, res) => {
  await fetch("http://localhost:9000/cart", { method: "POST" });
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});

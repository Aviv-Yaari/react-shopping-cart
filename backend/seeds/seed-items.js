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

const Item = require("../models/Item");
const items = require("./items.json");

for (const item of items) {
  const newItem = new Item({ ...item });
  newItem.save(function (err) {
    if (err) return console.error(err);
  });
}

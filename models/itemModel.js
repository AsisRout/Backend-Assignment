const mongoose = require("mongoose");
// Mongoose Schema for a item
const itemSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
    unique: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

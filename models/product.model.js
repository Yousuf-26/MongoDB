const mongoose = require("mongoose");

//HOW TO CREATE A TABLE IN MONGODB
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
});

//This will help create the schema in the Mongo Cloud
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

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
});

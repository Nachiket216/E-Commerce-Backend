const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  original_price: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  delivery_time: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  in_stock: {
    type: Boolean,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  image: String,
});

const Products = mongoose.model("Products", productSchema, "products");

module.exports = Products;

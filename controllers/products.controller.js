const User = require("../models/users.model");
const Products = require("../models/products.model");

module.exports.index = async (req, res) => {
  const user = await User.find({ _id: req.signedCookies.userId });
  const products = await Products.find();
  res.render("products/listProduct", { products: products, user: user });
};

module.exports.create = (req, res) => {
  res.render("products/create", { csrfToken: req.csrfToken() });
};

module.exports.postCreate = async (req, res) => {
  const newItem = {
    title: req.body.title,
    image: req.file.path.split("/").slice(1).join("/"),
  };
  const product = await Products.create(newItem);
  res.redirect("/products");
};

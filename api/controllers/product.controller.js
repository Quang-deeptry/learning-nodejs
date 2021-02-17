const Products = require("../../models/products.model");

module.exports.index = async (req, res) => {
  const products = await Products.find();
  res.json(products);
};

module.exports.delete = async (req, res) => {
  const product = await Products.deleteOne({ _id: req.params.productId });
  res.redirect("back");
};

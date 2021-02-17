const express = require("express");
const router = express.Router();

// middleware check cookie bla bla
const authMiddleware = require("../../middlewares/auth.middleware");

const productController = require("../controllers/product.controller");

router.get("/products", authMiddleware.auth, productController.index);
router.get("/products/delete/:productId", productController.delete);

module.exports = router;

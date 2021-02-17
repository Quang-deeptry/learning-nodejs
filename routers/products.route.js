const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
// middleware check cookie bla bla
const authMiddleware = require("../middlewares/auth.middleware");

const productController = require("../controllers/products.controller");

router.get("/products", authMiddleware.auth, productController.index);
router.get("/products/create", authMiddleware.auth, productController.create);

router.post(
  "/products/create",
  authMiddleware.auth,
  upload.single("image"),
  productController.postCreate
);

module.exports = router;

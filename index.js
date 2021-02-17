const express = require("express");
const pug = require("pug");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const csrf = require("csurf");

mongoose.connect("mongodb://localhost/learning-nodejs?retryWrites=false", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// require index controller
const homeController = require("./controllers/home.controller");

// require router
const productRoute = require("./routers/products.route");
const authRoute = require("./routers/auth.route");

// require api
const productApiRoute = require("./api/routes/product.route");

const app = express();
const port = 3000;

app.use(express.static("public"));
// cookie parser
app.use(cookieParser("abcdefgh123456789"));

// body parser to json endcode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// middleware csrf token
app.use(csrf({ cookie: true }));
// pugjs set view to folder views
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", homeController.index);

app.use("/", productRoute);
app.use("/", authRoute);
app.use("/api", productApiRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

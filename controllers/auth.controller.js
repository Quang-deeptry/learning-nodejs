const User = require("../models/users.model");
const md5 = require("md5");

module.exports.login = (req, res) => {
  if (req.signedCookies.userId) {
    res.redirect("back");
    return;
  }
  res.render("auth/login", { csrfToken: req.csrfToken() });
};

module.exports.postLogin = async (req, res) => {
  const user = await User.find({
    email: req.body.email,
    password: md5(req.body.password),
  });

  if (!user.length) {
    res.redirect("/login");
    return;
  }

  res.cookie("userId", user[0]._id, { signed: true });
  res.send("success");
};

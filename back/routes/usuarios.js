const express = require("express");
const router = express.Router();
const { User } = require("../models/index");
const passport = require("passport");

router.post("/register", (req, res) => {
  const newUser = User.build(req.body);
  newUser.hashPassword(newUser.password);
  newUser.save();
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({
    userName: req.user.userName,
    userEmail: req.user.userEmail,
    birthDay: req.user.birthDay,
    address: req.user.address,
    imgProfile: req.user.imgProfile,
    isAdmin: req.user.isAdmin
  });
});

router.get("/logout", function(req, res) {
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { User } = require("../models/index");
const passport = require("passport");

router.post("/user/register", function(req, res) {
  User.create(req.body)
    .then(user =>
      user ? res.sendStatus(200) : res.status(404).send("No se creo la cuenta ")
    )
    .catch(res.send(403));
});

router.post("/user/login", passport.authenticate("local"), function(req, res) {
  res.status(200).json({
    userName: req.user.userName,
    userEmail: req.user.userEmail,
    birthDay: req.user.birthDay,
    address: req.user.address,
    imgProfile: req.user.imgProfile,
    isAdmin: req.user.isAdmin
  });
});

router.get("/user/logout", function(req, res) {
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;

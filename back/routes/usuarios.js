const express = require("express");
const router = express.Router();
const { User } = require("../models/UserModel");
const passport = require("passport");

router.post("/user/register", function(req, res) {
  User.create(req.body).then(user =>
    user ? res.sendStatus(200) : res.status(404).send("No se creo la cuenta ")
  );
});
router.post("/user/login", passport.authenticate("local"), function(req, res) {
  res.status(200).send(req.user);
});
router.get("/user/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;

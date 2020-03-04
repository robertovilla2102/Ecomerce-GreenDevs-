const router = require("express").Router();
const passport = require("passport");

router.get("/facebook", passport.authenticate("facebook"), (req, res) => {
  console.log("ENTRE AL LOG");
});

router.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    res.status(201).send("LOGEADO CON FACEBOOK");
  }
);

module.exports = router;

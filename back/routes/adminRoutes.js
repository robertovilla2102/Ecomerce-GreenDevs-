const router = require("express").Router();
const { User } = require("../models/index");

router.put("/add-admin", (req, res) => {
  User.update(
    { isAdmin: true },
    {
      where: { userEmail: req.body.userEmail }
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

router.put("/remove-admin", (req, res) => {
  User.uptate(
    { isAdmin: false },
    { where: { userEmail: req.body.userEmail } }
  ).then(() => {
    res.sendStatus(200);
  });
});

router.delete("/delete-user", (req, res) => {
  User.findOne({ where: { userEmail: req.body.userEmail } }).then(() => {
    res.sendStatus(200);
  });
});

module.exports = router;

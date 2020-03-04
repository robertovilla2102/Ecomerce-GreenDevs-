const router = require("express").Router();
const { User } = require("../models/index");

router.put("/add-admin", (req, res) => {
  User.update({ isAdmin: true }, { returning: true, where: req.body }).then(
    ([count, user]) => {
      res.json(user);
    }
  );
});

router.put("/remove-admin", (req, res) => {
  User.update({ isAdmin: false }, { returning: true, where: req.body }).then(
    ([count, user]) => {
      res.json(user);
    }
  );
});

router.delete("/delete-user", (req, res) => {
  User.findOne({ where: req.body }).then(() => {
    res.send(`usuario ${req.body} eliminado`);
  });
});

module.exports = router;

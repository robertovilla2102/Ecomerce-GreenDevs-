const { User } = require("../models/index");

const AdminController = {};

AdminController.asignarAdministrador = (req, res) => {
  User.findOne(req.params.id)
    .then((user) => {
      user
        .update(
          { isAdmin: !user.isAdmin },
          { where: { id: req.params.userId } }
        )
        .then(() => {
          User.findAll().then((users) => {
            res.status(200).json(users);
          });
        });
    })
    .catch((err) => res.send(err));
};

AdminController.borrarUsuario = (req, res) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => res.send(err));
};

AdminController.buscarUsuarios = (req, res) => {
  User.findAll()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.send(err));
};

module.exports = AdminController;

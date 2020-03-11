const AdminController = {};
const { User } = require("../models/index");


AdminController.asignarAdministrador = (req, res) => {
  User.update({ isAdmin: true }, {where:{id:req.params.userId}})
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => res.send(err));
};

AdminController.quitarAdministrador = (req, res) => {
  User.update({ isAdmin: false }, {where:{id:req.params.userId}})
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => res.send(err));
};

AdminController.borrarUsuario = (req, res) => {
  User.destroy({ where: {id:req.params.userId} })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => res.send(err));
};

AdminController.buscarUsuarios = (req, res) => {
  User.findAll()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.send(err));
};

module.exports = AdminController;

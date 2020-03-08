const UsuarioController = {};
const { User, Valoracion } = require("../models/index");

UsuarioController.verificarLogin = (req, res) => {
  if (req.user) {
    res.json({
      userName: req.user.userName,
      userEmail: req.user.userEmail,
      birthDay: req.user.birthDay,
      address: req.user.address,
      imgProfile: req.user.imgProfile,
      isAdmin: req.user.isAdmin
    });
  } else {
    next();
  }
};

UsuarioController.crearUsuario = (req, res) => {
  User.create(req.body.user)
    .then(user => {
      res.status(201).json({
        userName: user.userName,
        userEmail: user.userEmail,
        userProfile: user.imgProfile,
        userBirthDay: user.birthDay,
        userAddress: user.address
      });
    })
    .catch(error => res.send(error));
};

UsuarioController.login = (req, res) => {
  res
    .status(200)
    .json({
      userName: req.user.userName,
      userEmail: req.user.userEmail,
      birthDay: req.user.birthDay,
      address: req.user.address,
      imgProfile: req.user.imgProfile,
      isAdmin: req.user.isAdmin
    })
    .catch(err => res.send(err));
};

UsuarioController.logout = (req, res) => {
  req.logOut();
  res.sendStatus(200);
};

module.exports = UsuarioController;

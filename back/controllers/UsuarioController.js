const UsuarioController = {};
const { User, Valoracion, Carrito } = require("../models/index");

UsuarioController.verificarLogin = (req, res, next) => {
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

UsuarioController.edit = (req, res) => {
  User.update(req.body.user, { where: { id: req.user.id } })
    .then(() => {
      return User.findOne({ where: { id: req.user.id } });
    })
    .then(user => {
      res.status(201).json({
        userName: user.userName,
        userEmail: user.userEmail,
        userProfile: user.imgProfile,
        userBirthDay: user.birthDay,
        userAddress: user.address
      });
    });
};

UsuarioController.login = async (req, res) => {
  var listCarrito = req.session.carrito;
  if (listCarrito) {
    await listCarrito.forEach(carrito => {
      Carrito.findOne({
        where: { userId: req.user.id, productoId: carrito.producto.id }
      }).then(carritos => {
        if (carritos) {
          Carrito.update(
            { cantidad: carritos.cantidad + carrito.cantidad },
            { where: { id: carritos.id } }
          );
        } else {
          Carrito.create({
            estado: carrito.estado,
            cantidad: carrito.cantidad,
            userId: req.user.id,
            productoId: carrito.producto.id
          });
        }
      });
    });
  }
  res.status(200).json({
    id: req.user.id,
    userName: req.user.userName,
    userEmail: req.user.userEmail,
    birthDay: req.user.birthDay,
    address: req.user.address,
    imgProfile: req.user.imgProfile,
    isAdmin: req.user.isAdmin
  });
};

UsuarioController.logout = (req, res) => {
  req.logOut();
  res.sendStatus(200);
};

module.exports = UsuarioController;

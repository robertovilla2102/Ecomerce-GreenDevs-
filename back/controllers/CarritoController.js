const CarritoController = {};
const { Carrito, Producto } = require("../models/index");

CarritoController.buscarCarritos = function (req, res) {
  !req.user
    ? CarritoController.carritoDeslogeado(req, res)
    : CarritoController.carritoLogeado(req, res);
};

CarritoController.agregarProducto = function(req, res) {
  !req.user
    ? CarritoController.agregarProductoDeslogeado(req, res)
    : CarritoController.agregarProductoLogeado(req, res);
};

CarritoController.eliminarCarrito = (req, res) => {
  !req.user
    ? CarritoController.eliminarCarritoDeslogeado(req, res)
    : CarritoController.eliminarCarritoLogeado(req, res);
};

CarritoController.carritoDeslogeado = async function (req, res) {
  req.session.carrito ? res.json(req.session.carrito) : res.json([]);
};

CarritoController.carritoLogeado = function (req, res) {
  Carrito.findAll({
    include: [
      {
        model: Producto
      }
    ],
    where: { userId: req.user.id }
  })
    .then(carritos => res.json(carritos))
    .catch(err => {
      res.status(500).send(err);
    });
};

CarritoController.agregarProductoDeslogeado = function (req, res) {
  let listaCarrito = req.session.carrito || [];
  let productoId = req.params.productId;
  let datos = req.body.body;
  Producto.findOne({ where: { id: productoId } }).then(producto => {
    if (listaCarrito) {
      let posicion = CarritoController.verificarDuplicado(
        listaCarrito,
        productoId
      );
      if (posicion == -1) {
        const nuevoCarrito = {
          ...datos,
          producto,
          id: listaCarrito.length + 1
        };
        listaCarrito.push(nuevoCarrito);
      } else {
        let carritoActual = listaCarrito[posicion];
        carritoActual.cantidad += datos.cantidad;
        listaCarrito[posicion] = carritoActual;
      }
    }
    req.session.carrito = listaCarrito;
    res.status(200).json(req.session.carrito);
  });
};

CarritoController.agregarProductoLogeado = function (req, res) {
  let user = req.user || null;
  let productoId = req.params.productId;
  let datos = req.body.body

  Carrito.findOne({
    where: { userId: user.id, productoId: productoId }
  })
    .then(carritos => {
      if (carritos) {
        Carrito.update(
          { cantidad: carritos.cantidad + datos.cantidad },
          { where: { id: carritos.id } }
        ).then(() => res.sendStatus(201));
      } else {
        Carrito.create({
          ...datos,
          userId: user.id,
          productoId: productoId
        }).then(() => {
          res.sendStatus(200);
        });
      }
    })
    .catch(err => res.json(err));
};

CarritoController.editarCarrito = (req, res) => {
  Carrito.update(req.body, { where: { id: req.params.id } })
    .then(res.sendStatus(200))
    .catch(err => res.send(err));
};

CarritoController.eliminarCarritoDeslogeado = (req, res) => {
  let listaCarrito = req.session.carrito || [];
  let carritoId = parseInt(req.params.id);
  if (listaCarrito) {
    listaCarrito = listaCarrito.filter(carrito => carrito.id !== carritoId);
    req.session.carrito = listaCarrito;
  }
  res.sendStatus(200);
};

CarritoController.eliminarCarritoLogeado = (req, res) => {
  Carrito.destroy({ where: { id: req.params.id } })
    .then(res.sendStatus(200))
    .catch(err => res.send(err));
};

CarritoController.verificarDuplicado = function (listaCarrito, productoId) {
  let posicion = -1;
  for (let i = 0; i < listaCarrito.length; i++) {
    if (listaCarrito[i].producto.id == productoId) {
      posicion = i;
      break;
    }
  }
  return posicion;
};

module.exports = CarritoController;

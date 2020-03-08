const ProductoController = {};
const { Producto, Categoria } = require("../models/index");
const Op = require("sequelize").Op;

ProductoController.buscarProductos = (req, res) => {
  Producto.findAll()
    .then(productos => {
      res.status(200).json(productos);
    })
    .catch(err => res.send(err));
};

ProductoController.buscarUnProducto = (req, res) => {
  Producto.findByPk(req.params.id)
    .then(producto => {
      res.status(200).json(producto);
    })
    .catch(err => res.send(err));
};

ProductoController.buscarPorNombre = (req, res) => {
  Producto.findAll({
    where: { name: { [Op.substring]: req.params.name } }
  })
    .then(productos => {
      res.json(productos);
    })
    .catch(err => res.send(err));
};

module.exports = ProductoController;

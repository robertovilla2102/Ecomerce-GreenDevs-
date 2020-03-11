const ProductoController = {};
const { Producto, Categoria } = require("../models/index");
const Op = require("sequelize").Op;

ProductoController.buscarProductos = (req, res) => {
  if (Object.keys(req.query).length != 0) {
    if (req.query.min && req.query.max) {
      Producto.findAll({
        where: { price: { [Op.gt]: req.query.min, [Op.lte]: req.query.max } }
      }).then(productos => {
        res.send(productos);
      });
    } else if (req.query.alfabetico) {
      Producto.findAll({
        order: [["name", req.query.alfabetico]]
      }).then(productos => {
        res.send(productos);
      });
    }
  } else {
    Producto.findAll()
      .then(productos => {
        res.status(200).json(productos);
      })
      .catch(err => res.send(err));
  }
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

ProductoController.addProducto = (req, res) => {
  Producto.create({
    name: req.body.body.name,
    price: req.body.body.price,
    imgProfile: req.body.body.imgProfile,
    stock: req.body.body.stock,
    description: req.body.body.description,
    categoryId: req.body.body.categoryId
  })
    .then(producto => {
      res.status(201).json(producto)
    })
    .catch(err => res.send(err))
}


module.exports = ProductoController;

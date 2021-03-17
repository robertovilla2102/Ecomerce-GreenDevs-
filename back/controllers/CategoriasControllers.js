const { Producto, Categoria } = require("../models/index");

const CategoriasController = {};

CategoriasController.buscarCategorias = (req, res) => {
  Categoria.findAll()
    .then((categorias) => {
      res.send(categorias);
    })
    .catch((err) => res.status(500).send(err));
};

CategoriasController.traerUno = (req, res) => {
  Categoria.findByPk(req.params.id)
    .then((categoria) => {
      res.status(201).send(categoria);
    })
    .catch((err) => res.send(err));
};

CategoriasController.buscarProductosDeUnaCategoria = (req, res) => {
  Producto.findAll({
    where: { categoryId: req.params.id },
    include: [{ model: Categoria, as: "category" }],
  })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => res.send(err));
};

CategoriasController.agregarUnaCategoria = (req, res) => {
  Categoria.create({
    name: req.body.body.name,
    imgCategory: req.body.body.imgCategory,
  })
    .then(() => {
      Categoria.findAll().then((categorias) => {
        res.status(201).json(categorias);
      });
    })
    .catch((err) => res.send(err));
};

CategoriasController.eliminarUnaCategoria = (req, res) => {
  Categoria.destroy({ where: { id: req.params.id } })
    .then(() => {
      Categoria.findAll().then((categories) => {
        res.status(201).json(categories);
      });
    })
    .catch((err) => res.send(err));
};

CategoriasController.updateCategory = (req, res) => {
  Categoria.update(
    {
      name: req.body.body.name,
      imgCategory: req.body.body.imgCategory,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      Categoria.findAll().then((categorias) => {
        res.status(201).json(categorias);
      });
    })
    .catch((err) => res.send(err));
};

module.exports = CategoriasController;

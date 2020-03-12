const CategoriasController = {};
const { Producto, Categoria } = require("../models/index");

CategoriasController.buscarCategorias = (req, res) => {
  Categoria.findAll()
    .then(categoria => {
      res.json(categoria);
    })
    .catch(err => res.status(500).send(err));
};

CategoriasController.buscarProductosDeUnaCategoria = (req, res) => {
  Producto.findAll({
    where: { categoryId: req.params.id },
    include: [{ model: Categoria, as: "category" }]
  })
    .then(products => {
      res.json(products);
    })
    .catch(err => res.send(err));
};

CategoriasController.agregarUnaCategoria = (req, res) => {
  console.log(req.body)

  Categoria.create({
    name: req.body.body.name,
    imgCategory: req.body.body.imgCategory
  })
    .then(() => {
      Categoria.findAll()
        .then(categorias => {
          res.status(201).json(categorias)
        })
    })
    .catch(err => res.send(err));
};

CategoriasController.eliminarUnaCategoria = (req, res) => {
  Categoria.destroy({ where: { id: req.params.id } })
    .then(() => {
      Categoria.findAll()
        .then(categories => {
          res.status(201).json(categories)
        })
    })
    .catch(err => res.send(err));
}

CategoriasController.updateCategory = (req, res) => {
  console.log(req.body)

  Categoria.update({
    name: req.body.body.name,
    imgCategory: req.body.body.imgCategory
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      Categoria.findAll()
        .then(categorias => {
          res.status(201).json(categorias)
        })
    })
    .catch(err => res.send(err));
}

CategoriasController.traerUno = (req, res) => {
  Categoria.findByPk(req.params.id)
    .then(categorias => {
      res.status(201).json(categorias)
    })
    .catch(err => res.send(err));
}

module.exports = CategoriasController;

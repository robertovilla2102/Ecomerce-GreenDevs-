const router = require("express").Router();
const { Producto, Categoria } = require("../models/index");

router.get("/", (req, res) => {
  Categoria.findAll().then(categoria => {
    res.json(categoria);
  });
});

router.get("/:id", (req, res) => {
  Producto.findAll({
    where: { categoryId: req.params.id },
    include: [{ model: Categoria, as: "category" }]
  })
    .then(products => {
      res.json(products);
    })
    .catch(err => res.json(err));
});

module.exports = router;

const router = require("express").Router();
const { Producto, Categoria } = require("../models/index");

router.get("/", (req, res) => {
  Categoria.findAll()
    .then(categoria => {
      res.json(categoria);
    })
    .catch(err => res.json(err));
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

router.post("/add", (req, res) => {
  Categoria.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => res.json(err));
});

router.delete("/delete/:id", (req, res) => {
  Categoria.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.sendStatus(202);
    })
    .catch(err => res.json(err));
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { Carrito } = require("../models/index");

router.get("/", function(req, res, next) {
  Carrito.findAll()
    .then(productos => res.json(productos))
    .catch(res.sendStatus(500, "Fallo busqueda"));
});

router.post("/add/:productId", function(req, res, next) {
  Carrito.create({ cantidad, estado, productoId: req.params.productId })
    .then(productos => res.json(productos))
    .catch(err => res.json(err));
});

router.put("/edit/:id", function(req, res, next) {
  Carrito.update(req.body, { where: { id: req.params.id } })
    .then(res.sendStatus(200))
    .catch(res.sendStatus(500, "Fallo Actualizacion"));
});

router.delete("/delete/:id", function(req, res, next) {
  Carrito.destroy({ where: { id: req.params.id } }).then(res.sendStatus(200));
});

module.exports = router;

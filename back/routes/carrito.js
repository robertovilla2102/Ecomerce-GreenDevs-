const express = require("express");
const router = express.Router();
const { Carrito, Producto } = require("../models/index");

router.get("/:id", function(req, res, next) {
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
});

router.post("/add/:productId", function(req, res, next) {
  //const { cantidad, estado } = req.body;

  Carrito.create({
    cantidad: req.body.body.cantidad,
    productoId: req.params.productId,
    userId: req.user.id
  })
    .then(productos => {
      res.json(productos);
    })
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

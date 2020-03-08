const express = require("express");
const router = express.Router();
const { Carrito, Producto } = require("../models/index");

router.get("/", function(req, res, next) {
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
  Carrito.findOne({
    where: { userId: req.user.id, productoId: req.params.productId }
  })
    .then(carritos => {
      if (carritos) {
        Carrito.update(
          { cantidad: carritos.cantidad + req.body.body.cantidad },
          { where: { id: carritos.id } }
        ).then(() => res.status(201));
      } else {
        Carrito.create({
          ...req.body.body,
          userId: req.user.id,
          productoId: req.params.productId
        }).then(carrito => {
          res.sendStatus(200);
        });
      }
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

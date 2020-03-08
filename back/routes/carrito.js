const express = require("express");
const router = express.Router();
const { Carrito, Producto } = require("../models/index");
const CarritoController = require("../controllers/CarritoController");

router.get("/", CarritoController.buscarCarritos); //Busca los carritos de la persona logeada o deslogueada

router.post("/add/:productId", CarritoController.agregarProducto); //Agrega un nuevo carrito a la base de datos o a la sesion si es que no esta logeado

router.put("/edit/:id", function(req, res, next) {
  Carrito.update(req.body, { where: { id: req.params.id } })
    .then(res.sendStatus(200))
    .catch(res.sendStatus(500, "Fallo Actualizacion"));
});

router.delete("/delete/:id", function(req, res, next) {
  Carrito.destroy({ where: { id: req.params.id } }).then(res.sendStatus(200));
});

module.exports = router;

const express = require("express");
const router = express.Router();
//importando Models
const { Producto } = require("../models/index");

router.get("/", (req, res, next) => {
  Producto.findAll()
    .then(productos => {
      res.status(200).json(productos);
    })
    .catch(res.sendStatus(500, "Fallo busqueda"));
});

router.get("/:id", (req, res, next) => {
  Producto.findByPk(req.params.id)
    .then(producto => {
      res.status(200).json(producto);
    })
    .catch(res.sendStatus(500, "Fallo busqueda");
});

module.exports = router;

const express = require("express");
const routes = express.Router();
//importando Models
const { Producto } = require("../models/index");

routes.get("/productos", (req, res, next) => {
  Producto.findAll()
    .then(productos => {
      res.status(200).send(productos);
    })
    .catch(next);
});

routes.get("/productos/:id", (req, res, next) => {
  Producto.findByPk(req.params.id)
    .then(producto => {
      res.status(200).send(producto);
    })
    .catch(next);
});

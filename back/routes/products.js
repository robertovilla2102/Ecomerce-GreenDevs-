const express = require("express");
const router = express.Router();
const Op = require("sequelize").Op;
//importando Models
const { Producto } = require("../models/index");

router.get("/", (req, res, next) => {
  Producto.findAll()
    .then(productos => {
      console.log(req.user);

      res.status(200).json(productos);
    })
    .catch(err => res.sendStatus(500, "Fallo busqueda"));
});

router.get("/:id", (req, res, next) => {
  Producto.findByPk(req.params.id)
    .then(producto => {
      res.status(200).json(producto);
    })
    .catch(() => res.sendStatus(500, "Fallo busqueda"));
});

router.get("/search/:name", (req, res) => {
  Producto.findAll({
    where: { name: { [Op.substring]: req.params.name } }
  })
    .then(productos => {
      res.json(productos);
    })
    .catch(err => console.log(err));
});

module.exports = router;

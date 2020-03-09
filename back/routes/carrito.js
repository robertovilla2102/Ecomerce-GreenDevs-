const express = require("express");
const router = express.Router();
const CarritoController = require("../controllers/CarritoController");

router.get("/", CarritoController.buscarCarritos);
//Busca los carritos de la persona logeada o deslogueada

router.post("/add/:productId", CarritoController.agregarProducto);
//Agrega un nuevo carrito a la base de datos o a la sesion si es que no esta logeado

router.put("/edit/:id", CarritoController.editarCarrito);
//Editar un carrito

router.delete("/delete/:id", CarritoController.eliminarCarrito);
//Eliminar un carrito de la lista

module.exports = router;

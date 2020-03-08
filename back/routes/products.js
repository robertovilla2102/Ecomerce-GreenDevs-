const router = require("express").Router();
const ProductosControllers = require("../controllers/ProductosControllers");

router.get("/", ProductosControllers.buscarProductos);

router.get("/:id", ProductosControllers.buscarUnProducto);

router.get("/search/:name", ProductosControllers.buscarPorNombre);

module.exports = router;

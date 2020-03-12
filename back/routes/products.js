const router = require("express").Router();
const ProductosControllers = require("../controllers/ProductosControllers");

router.get("/", ProductosControllers.buscarProductos);

router.get("/:id", ProductosControllers.buscarUnProducto);

router.get("/search/:name", ProductosControllers.buscarPorNombre);

router.post('/add', ProductosControllers.addProducto)

router.put('/edit/:id', ProductosControllers.modificarProducto)

router.delete('/delete/:id', ProductosControllers.deleteProduct)

module.exports = router;

const router = require("express").Router();
const CompraController = require("../controllers/ComprasController");

router.get("/", CompraController.buscarCompras);
// busac todas los carritos que tengan como estado comprado

router.get("/find/:id", CompraController.buscarCompraPorId);
//Busca una compra especifica

router.post("/add/:productId", CompraController.addCompra);
// crea una compra y se la asigna a un carrito en compraId , ademas, cambia de estado pending a comprado

router.post("/muchos", CompraController.addMultiples);
// hace un update masivo de todo tu carrito y lo convierte en una ordendecompra

router.delete("/detele/:compraId/:carritoId", CompraController.eliminarCompra);
// elimina la compra del carrito y de el historial de compras

module.exports = router;

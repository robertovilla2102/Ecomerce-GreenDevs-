const router = require("express").Router()
const CompraController = require('../controllers/ComprasController')

router.get('/', CompraController.buscarCompras)
// busac todas los carritos que tengan como estado comprado

router.get('/add/:productId/', CompraController.addCompra)
// crea una compra y se la asigna a un carrito en compraId , ademas, cambia de estado pending a comprado

router.delete('/detele/:compraId/:carritoId')
// elimina la compra del carrito y de el historial de compras



module.exports = router
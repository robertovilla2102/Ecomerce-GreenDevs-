const ComprasController = {};
const { Carrito, Compra, Producto } = require("../models/index");

ComprasController.buscarCompras = (req, res) => {
  Carrito.findAll({
    include: [
      {
        model: Producto
      }
    ],
    where: {
      userId: req.user.id,
      estado: 'comprado'
    }
  })
    .then(carritos => res.json(carritos))
    .catch(err => {
      res.status(500).send(err)
    })
}

ComprasController.addCompra = (req, res) => {
  let productoId = req.params.productId
  let user = req.user
  let datos = req.body.body

  Compra.create({
    dateCompra: 123,
    salt: `${Math.round(Math.random() * 12345)}`
  })
    .then(compra => {
      Carrito.findOne({
        where: {
          userId: user.id,
          productoId: productoId
        }
      })
        .then(carrito => {
          if (carrito) {

            Carrito.update(
              { estado: 'comprado', compraId: compra.id }, {
              returning: true,
              where: {
                id: carrito.id,
              }
            })
              .then(([rowsUpdate, [updateCarrito]]) => {
                console.log('la compra se ha realizad0');

                Producto.findOne({
                  where: {
                    id: productoId
                  }
                })
                  .then(producto => {
                    producto.update({ stock: producto.stock - updateCarrito.cantidad },
                      {
                        returning: true,
                        where: {
                          id: producto.id
                        }
                      })
                      .then(([rowsUpdate, [updateProducto]]) => {
                        res.status(200).json({ updateProducto, carrito })
                      })
                      .catch(err => res.json(err))
                  })
              })
          }
          else {
            Carrito.create({
              ...datos,
              userId: user.id,
              productoId: productoId
            })
              .then(updateCarrito => {
                console.log('la compra se ha realizad0');

                Producto.findOne({
                  where: {
                    id: productoId
                  }
                })
                  .then(producto => {
                    producto.update({ stock: producto.stock - updateCarrito.cantidad },
                      {
                        returning: true,
                        where: {
                          id: producto.id
                        }
                      })
                      .then(([rowsUpdate, [updateProducto]]) => {
                        res.status(200).json({ updateProducto, carrito })
                      })
                      .catch(err => res.json(err))
                  })
              })
          }
        })
    })
    .catch(err => res.json(err))
}

ComprasController.eliminarCompra = (req, res) => {
  Compra.destroy({
    where: {
      id: req.params.compraId
    }
  })
    .then(() => {
      Carrito.destroy({
        where: {
          id: req.params.carritoId, estado: 'comprado'
        }
      })
        .then(res.sendStatus(200))
        .catch(err => res.send(err))
    })
}

module.exports = ComprasController;

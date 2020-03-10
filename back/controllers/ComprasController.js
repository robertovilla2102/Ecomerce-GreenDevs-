const ComprasController = {};
const { Carrito, Compra, Producto } = require("../models/index");

ComprasController.buscarCompras = (req, res) => {
  Carrito.findAll({
    include: [
      {
        model: Producto
      },
      {
        model: Compra
      }
    ],

    where: {
      userId: req.user.id,
      estado: 'comprado'
    }

  })
    .then(carritos => {
      res.json(carritos)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

ComprasController.addCompra = (req, res) => {
  let productoId = req.params.productId
  let user = req.user

  Compra.create({
    dateCompra: 123,
    salt: `${Math.round(Math.random() * 12345)}`
  })
    .then(compraRealizada => {
      const compramePorfa = compraRealizada.id

      Carrito.findOne({
        where: {
          userId: req.user.id,
          productoId: productoId
        }
      })
        .then(carrito => {
          if (carrito) {
            Carrito.update(
              { estado: 'comprado', compraId: compraRealizada.id }, {
              returning: true,
              where: {
                id: carrito.id,
              }
            })
              .then(([rowsUpdate, [updateCarrito]]) => {
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
              estado: req.body.body.estado,
              cantidad: req.body.body.cantidad,
              userId: user.id,
              productoId: productoId,
              compraId: compramePorfa
            })
              .then(updateCarrito => {
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

ComprasController.addMultiples = (req, res) => {

  Compra.create({
    dateCompra: 123,
    salt: `${Math.round(Math.random() * 12345)}`
  })
    .then(compra => {
      console.log('se creo correctamente laorden de compre')

      Carrito.findAll({
        where: {
          userId: req.user.id,
          estado: 'pending'
        }
      })
        .then((carritos) => {
          console.log('estos son los carritos');

          return Promise.all(carritos.map(carrito => {
            return carrito.update({ estado: 'comprado', compraId: compra.id }, {
              returning: true,
              where: {
                id: carrito.id
              }
            })
          }))
            .then(arr => {

              return Promise.all(
                arr.map(carritoUpdateado => {
                  return Producto.findOne({
                    where: {
                      id: carritoUpdateado.productoId
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
                    })
                })
              )
            })
            .then(() => {
              res.status(201)
            })
            .catch(err => res.json(err))
        })
    })
}

ComprasController.addMultiples2 = async (req, res, next) => {

  const ordenCompra = await Compra.create({
    dateCompra: 123,
    salt: `${Math.round(Math.random() * 12345)}`
  })


  const arrCarritos = await Carrito.findAll({
    where: {
      userId: req.user.id,
      estado: 'pending'
    }
  })

  const arrCarritosUpdateados = await arrCarritos.map(carrito => {
    carrito.update({
      estado: 'comprado',
      compraId: ordenCompra.id
    },
      {
        returning: true,
        where: {
          id: carrito.id
        }
      })
  })

  return console.log(arrCarritosUpdateados)



  /*   .then(([rowsUpdate, [updateCarrito]]) => {
      Producto.findOne({
        where: {
          id: updateCarrito.productoId
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
    }) */
}





module.exports = ComprasController;

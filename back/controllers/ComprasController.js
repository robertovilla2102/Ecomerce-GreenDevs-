const nodemailer = require("nodemailer");
const { Carrito, Compra, Producto } = require("../models/index");

const ComprasController = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "robertvlopez27@gmail.com",
    pass: "elgatomu",
  },
});

ComprasController.buscarCompras = (req, res) => {
  Carrito.findAll({
    include: [
      {
        model: Producto,
      },
      {
        model: Compra,
      },
    ],

    where: {
      userId: req.user.id,
      estado: "comprado",
    },
  })
    .then((carritos) => {
      res.json(carritos);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

ComprasController.buscarCompraPorId = (req, res) => {
  Carrito.findOne({
    include: [
      {
        model: Producto,
      },
      {
        model: Compra,
      },
    ],
    where: {
      userId: req.user.id,
      estado: "comprado",
      id: req.params.id,
    },
  })
    .then((carritos) => {
      res.json(carritos);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

ComprasController.addCompra = (req, res) => {
  let productoId = req.params.productId;
  let user = req.user;

  const mailOptions = {
    from: "robertvlopez27@gmail.com",
    to: `${req.user.userEmail}`,
    subject: "Resumen de su compra botanica Binaria",
    text: `Esperamos que disfrutes de las plantas mas lindas y mejor cuidadas de toda argentina.! Vuelva pronto!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email enviado");
    }
  });

  Compra.create({
    dateCompra: 123,
    salt: `${Math.round(Math.random() * 12345)}`,
  })
    .then((compraRealizada) => {
      const compramePorfa = compraRealizada.id;

      Carrito.findOne({
        where: {
          userId: req.user.id,
          productoId: productoId,
          estado: "pending",
        },
      }).then((carrito) => {
        if (carrito) {
          Carrito.update(
            { estado: "comprado", compraId: compraRealizada.id },
            {
              returning: true,
              where: {
                id: carrito.id,
              },
            }
          ).then(([rowsUpdate, [updateCarrito]]) => {
            Producto.findOne({
              where: {
                id: productoId,
              },
            }).then((producto) => {
              producto
                .update(
                  { stock: producto.stock - updateCarrito.cantidad },
                  {
                    returning: true,
                    where: {
                      id: producto.id,
                    },
                  }
                )
                .then(([rowsUpdate, [updateProducto]]) => {
                  console.log("se ha anadidocon exito");
                  res.status(200).json({ updateProducto, carrito });
                })
                .catch((err) => res.json(err));
            });
          });
        } else {
          Carrito.create({
            estado: req.body.body.estado,
            cantidad: req.body.body.cantidad,
            userId: user.id,
            productoId: productoId,
            compraId: compramePorfa,
          }).then((updateCarrito) => {
            Producto.findOne({
              where: {
                id: productoId,
              },
            }).then((producto) => {
              producto
                .update(
                  { stock: producto.stock - updateCarrito.cantidad },
                  {
                    returning: true,
                    where: {
                      id: producto.id,
                    },
                  }
                )
                .then(([rowsUpdate, [updateProducto]]) => {
                  console.log("se ha anadidocon exito");
                  res.status(200).json({ updateProducto, carrito });
                })
                .catch((err) => res.json(err));
            });
          });
        }
      });
    })
    .catch((err) => res.json(err));
};

ComprasController.eliminarCompra = (req, res) => {
  Compra.destroy({
    where: {
      id: req.params.compraId,
    },
  }).then(() => {
    Carrito.destroy({
      where: {
        id: req.params.carritoId,
        estado: "comprado",
      },
    })
      .then(res.sendStatus(200))
      .catch((err) => res.send(err));
  });
};

ComprasController.addMultiples = (req, res) => {
  const mailOptions = {
    from: "robertvlopez27@gmail.com",
    to: `${req.user.userEmail}`,
    subject: "Resumen de su compra botanica Binaria",
    text: `Esperamos que disfrutes de las plantas mas lindas y mejor cuidadas de toda argentina.! Vuelva pronto`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email enviado");
    }
  });

  Compra.create({
    dateCompra: 123,
    salt: `${Math.round(Math.random() * 12345)}`,
  }).then((compra) => {
    Carrito.findAll({
      where: {
        userId: req.user.id,
        estado: "pending",
      },
    }).then((carritos) => {
      return Promise.all(
        carritos.map((carrito) => {
          return carrito.update(
            { estado: "comprado", compraId: compra.id },
            {
              returning: true,
              where: {
                id: carrito.id,
              },
            }
          );
        })
      )
        .then((arr) => {
          return Promise.all(
            arr.map((carritoUpdateado) => {
              return Producto.findOne({
                where: {
                  id: carritoUpdateado.productoId,
                },
              }).then((producto) => {
                producto.update(
                  { stock: producto.stock - updateCarrito.cantidad },
                  {
                    returning: true,
                    where: {
                      id: producto.id,
                    },
                  }
                );
              });
            })
          );
        })
        .then(() => {
          console.log("se han agregado con exito");
          res.status(201);
        })
        .catch((err) => res.json(err));
    });
  });
};

module.exports = ComprasController;

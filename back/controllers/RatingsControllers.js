const { Valoracion, Carrito, Producto, User } = require("../models/index");
const RatingsController = {};

RatingsController.buscarValoraciones = (req, res) => {
  RatingsController.ratingGeneral(req.params.id);
  Valoracion.findAll({
    where: { productoId: req.params.id },
    include: [{ model: Producto }, { model: User }]
  }).then(ratings => {
    res.send(ratings);
  });
};

RatingsController.agregarValoracion = (req, res) => {
  Valoracion.create({
    ...req.body.review,
    userId: req.user.id
  })
    .then(() => {
      Carrito.update({ valorado: true }, { where: { id: req.params.id } }).then(
        () => {
          res.sendStatus(201);
        }
      );
    })
    .catch(err => res.send(err));
};

RatingsController.editarValoracion = (req, res) => {
  Valoracion.update(req.body, {
    returning: true,
    where: {
      id: req.params.id
    }
  }).then(([count, rating]) => {
    res.status(201).send(rating);
  });
};

RatingsController.ratingGeneral = function(productoId) {
  Valoracion.findAll({
    where: { productoId: productoId },
    include: [{ model: Producto }, { model: User }]
  }).then(rating => {
    let values = rating.map(p => p.rating);

    values.sort((a, b) => a - b);
    let lowMiddle = Math.floor((values.length - 1) / 2);
    let highMiddle = Math.ceil((values.length - 1) / 2);
    let median = (values[lowMiddle] + values[highMiddle]) / 2;
    Producto.update(
      { valoracionGeneral: median },
      { returning: true, where: { id: productoId } }
    );
  });
};

module.exports = RatingsController;

const { Valoracion, Carrito } = require("../models/index");
const RatingsController = {};

RatingsController.buscarValoracionPorId = (req, res) => {
  console.log(req.params.id);

  Valoracion.findByPk(req.params.id)
    .then(valoracion => {
      res.status(200).send(valoracion);
    })
    .catch(err => res.send(err));
};

RatingsController.buscarValoraciones = (req, res) => {
  Valoracion.findAll().then(ratings => res.send(ratings));
};

RatingsController.agregarValoracion = (req, res) => {
  Valoracion.create({
    ...req.body.review,
    userId: req.user.id
  })
    .then(() => {
      Carrito.update(
        { valorado: true },
        {
          where: {
            id: req.params.id
          }
        }
      ).then(() => {
        res.sendStatus(201);
      });
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

module.exports = RatingsController;

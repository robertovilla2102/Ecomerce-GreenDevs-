const { Valoracion } = require("../models/index");
const RatingsController = {};

RatingsController.buscarValoraciones = (req, res) => {
  Valoracion.findAll().then(ratings => res.send(ratings));
};

RatingsController.agregarValoracion = (req, res) => {
  Valoracion.create({ ...req.body.review, userId: req.user.id }).then(
    rating => {
      console.log(rating);
      res.status(201);
    }
  );
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

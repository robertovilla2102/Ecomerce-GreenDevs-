const router = require("express").Router();
const RatingsControllers = require("../controllers/RatingsControllers");

router.get("/all-ratings", RatingsControllers.buscarValoraciones);

router.post("/add-rating", RatingsControllers.agregarValoracion);

router.put("/edit/:id", RatingsControllers.editarValoracion);

module.exports = router;

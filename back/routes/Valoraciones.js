const router = require("express").Router();
const RatingsControllers = require("../controllers/RatingsControllers");

router.get("/all-ratings/:id", RatingsControllers.buscarValoraciones);

router.post("/add-rating/:id", RatingsControllers.agregarValoracion);

router.put("/edit/:id", RatingsControllers.editarValoracion);

module.exports = router;

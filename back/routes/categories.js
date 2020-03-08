const router = require("express").Router();
const CategoriaController = require("../controllers/CategoriasControllers");

router.get("/", CategoriaController.buscarCategorias);

router.get("/:id", CategoriaController.buscarProductosDeUnaCategoria);

router.post("/add", CategoriaController.agregarUnaCategoria);

router.delete("/delete/:id", CategoriaController.eliminarUnaCategoria);

module.exports = router;

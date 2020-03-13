const router = require("express").Router();
const CategoriaController = require("../controllers/CategoriasControllers");

router.get("/", CategoriaController.buscarCategorias);

router.get("/:id", CategoriaController.traerUno);

router.get(
  "/find-products/:id",
  CategoriaController.buscarProductosDeUnaCategoria
);

router.post("/add", CategoriaController.agregarUnaCategoria);

router.delete("/delete/:id", CategoriaController.eliminarUnaCategoria);

router.put("/update/:id", CategoriaController.updateCategory);

module.exports = router;

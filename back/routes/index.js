const router = require("express").Router();

const Carrito = require("./carrito");
const Compras = require("./compras");
const Usuarios = require("./usuarios");
const Admin = require("./adminRoutes");
const Productos = require("./products");
const Ratings = require("./Valoraciones");
const Categories = require("./categories");
const LoginFacebook = require("./loginWithFacebook");

router.use("/admin", Admin);
router.use("/user", Usuarios);
router.use("/compra", Compras);
router.use("/rating", Ratings);
router.use("/carrito", Carrito);
router.use("/products", Productos);
router.use("/auth", LoginFacebook);
router.use("/categories", Categories);

module.exports = router;

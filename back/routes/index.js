const router = require("express").Router();
const Admin = require("./adminRoutes");
const Productos = require("./products");
const Usuarios = require("./usuarios");
const Carrito = require("./carrito");
const LoginFacebook = require("./loginWithFacebook");
const Categories = require("./categories");
const Compras = require('./compras')

router.use("/categories", Categories);
router.use("/products", Productos);
router.use("/user", Usuarios);
router.use("/admin", Admin);
router.use("/carrito", Carrito);
router.use("/auth", LoginFacebook);
router.use('/compra', Compras)


module.exports = router;

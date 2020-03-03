const router = require("express").Router();
const Admin = require("./adminRoutes");
const Productos = require("./products");
const Usuarios = require("./usuarios");
const Carrito = require("./carrito");

router.use("/products", Productos);
router.use("/user", Usuarios);
router.use("/admin", Admin);
router.use("/carrito", Carrito);

module.exports = router;

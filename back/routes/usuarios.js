const router = require("express").Router();
const UsuarioController = require("../controllers/UsuarioController");
const passport = require("passport");

router.post("/register-local", UsuarioController.crearUsuario);

router.get("/islogin", UsuarioController.verificarLogin);

router.post("/login", passport.authenticate("local"), UsuarioController.login);

router.get("/logout", UsuarioController.logout);

router.post("/editPerfil", UsuarioController.edit);

module.exports = router;

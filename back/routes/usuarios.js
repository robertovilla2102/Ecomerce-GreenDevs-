const router = require("express").Router();
const UsuarioController = require("../controllers/UsuarioController");
const passport = require("passport");

router.post("/register-local", UsuarioController.crearUsuario);

router.get("/islogin", UsuarioController.verificarLogin);

router.post("/login", passport.authenticate("local"), UsuarioController.login);

router.get("/logout", UsuarioController.logout);

router.post(":id/valoracion", function(req, res) {
  Valoracion.create({
    ...req.body,
    userId: req.user.id,
    productorId: req.params.id
  }).then(() => Valoracion.findAll({ where: { productoId: req.params.id } }));
  res.sendStatus(404);
});

router.put(":id/add-review", function(req, res) {
  Valoracion.update(req.body, { where: { id: req.params.id } });
});

router.post("/editPerfil", UsuarioController.edit);

module.exports = router;

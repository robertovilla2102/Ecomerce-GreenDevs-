const router = require("express").Router();
const AdminController = require("../controllers/AdminController");

router.put("/add-admin", AdminController.asignarAdministrador);

router.put("/remove-admin", AdminController.quitarAdministrador);

router.delete("/delete-user", AdminController.borrarUsuario);

module.exports = router;

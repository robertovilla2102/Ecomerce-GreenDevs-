const router = require("express").Router();
const AdminController = require("../controllers/AdminController");

router.put("/add-admin/:userId", AdminController.asignarAdministrador)

router.delete("/delete-user/:userId", AdminController.borrarUsuario);

router.get("/see-users", AdminController.buscarUsuarios);


module.exports = router;

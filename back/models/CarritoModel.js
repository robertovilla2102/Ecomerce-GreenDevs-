const db = require("../config/db");
const S = require("sequelize");
const Carrito = db.define("carrito", {
  cantidad: {
    type: S.INTEGER
  },
  estado: {
    type: S.STRING
  }
});
module.exports = Carrito;

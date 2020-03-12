const db = require("../config/db");
const S = require("sequelize");
const Carrito = db.define("carrito", {
  cantidad: {
    type: S.INTEGER
  },
  estado: {
    //pending , comprado
    type: S.STRING,
    defaultValue: "pending"
  },
  valorado: { type: S.BOOLEAN, defaultValue: false }
});

module.exports = Carrito;

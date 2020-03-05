const db = require("../config/db");
const S = require("sequelize");
const Carrito = db.define("carrito", {
  cantidad: {
    type: S.INTEGER
  },
  estado: {
    //pending , comprado
    type: S.STRING,
    defaultValue: 'pending'
  }
})

module.exports = Carrito;

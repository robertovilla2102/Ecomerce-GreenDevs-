const db = require("../config/db");
const S = require("sequelize");

class Compra extends S.Model { }

Compra.init(
  {
    dateCompra: {
      type: S.INTEGER,
      allowNull: false
    },
    salt: {
      type: S.STRING
    }
  },
  {
    sequelize: db,
    modelName: "compras"
  }
);

module.exports = Compra;

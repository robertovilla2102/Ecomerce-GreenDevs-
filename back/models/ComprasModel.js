const db = require("../config/db");
const S = require("sequelize");

class Compras extends S.Model {}

Compras.init(
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
    modelName: "comprado"
  }
);

module.exports = Compras;

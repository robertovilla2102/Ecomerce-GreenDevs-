const db = require("../config/db");
const S = require("sequelize");

const { Valoraciones, Producto } = require("./index");

class Carrito extends S.Model {}

Carrito.init(
  {
    cantidad: {
      type: S.INTEGER,
      allowNull: false
    },
    estado: {
      type: S.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "carrito"
  }
);

Carrito.addHook("beforeCreate", () => {
  Valoraciones.create(
    { rating: 0.0, review: "" },
    { include: [{ model: Producto }] }
  );
});

module.exports = Carrito;

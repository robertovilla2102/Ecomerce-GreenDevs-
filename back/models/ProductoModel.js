const db = require("../config/db/index");
const S = require("sequelize");

class Producto extends S.Model {}

Producto.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },

    price: {
      type: S.INTEGER,
      allowNull: false
    },

    imgProfile: {
      type: S.STRING
    },

    stock: {
      type: S.INTEGER
    },

    description: {
      type: S.TEXT
    },

    disponibilidad: {
      type: S.BOOLEAN,
      defaultValue: true
    }
  },
  { sequelize: db, modelName: "producto" }
);

module.exports = Producto;

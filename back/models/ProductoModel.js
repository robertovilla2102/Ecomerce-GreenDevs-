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
    },
    valoracionGeneral: { type: S.INTEGER, defaultValue: 5 }
  },
  { sequelize: db, modelName: "producto" }
);

Producto.addHook("beforeCreate", producto => {
  console.log(producto.name);

  producto.name = producto.name.toLowerCase();
  console.log(producto.name);
});

module.exports = Producto;

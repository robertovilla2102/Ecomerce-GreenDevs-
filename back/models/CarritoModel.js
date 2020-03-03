const db=require("../config/db");
const S=require ("sequelize");


class Carrito extends S.Model {}

Carrito.init({

  cantidad: {
    type: S.INTEGER,
    allowNull: false,
  },
  estado: {
    type: S.STRING,
    allowNull: false,
  },

}, {

  sequelize:db, modelName: 'carrito'
});

module.exports= Carrito

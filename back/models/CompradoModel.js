const db=require("../config/db");
const S=require ("sequelize");


class Comprado extends S.Model {}

Comprado.init({

  dateCompra: {
    type: S.INTEGER,
    allowNull: false,
  },
  salt: {
    type: S.STRING
  },

}, {

  sequelize:db, modelName: 'comprado'
});

module.exports= Comprado

const db = require("../config/db/index");
const S = require("sequelize");

class Categoria extends S.Model {}

Categoria.init(
  {
    imgCategory: { type: S.TEXT, allowNull: false },
    name: {
      type: S.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "categoria" }
);

module.exports = Categoria;

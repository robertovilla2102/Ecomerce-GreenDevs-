const S = require("sequelize");

const db = require("../config/db/index");

const Validacion = db.define("favoritos", {
  rating: {
    type: S.DOUBLE
  },
  review: {
    type: S.STRING
  }
});
module.exports = Validacion;

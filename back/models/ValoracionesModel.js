const S = require("sequelize");
const db = require("../config/db/index");

const Valoracion = db.define("valoracion", {
  rating: {
    type: S.DOUBLE
  },
  review: {
    type: S.STRING
  }
});
module.exports = Valoracion;

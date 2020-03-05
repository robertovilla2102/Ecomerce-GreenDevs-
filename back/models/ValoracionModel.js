const S = require("sequelize");
const db = require("../config/db/index");

const Valoracion = db.define("valoracion", {
  rating: {
    type: S.DOUBLE,
    defaultValue: 0.0
  },
  review: {
    type: S.STRING,
    defaultValue: ""
  }
});
module.exports = Valoracion;

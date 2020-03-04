const S = require("sequelize");
const db = require("../config/db/index");
const crypto = require("crypto");

class User extends S.Model { }

User.init(
  {
    provider: { type: S.STRING }, //Lo necesita passport-facebook para guardar infode sesion
    provider_id: { type: S.STRING }, //Lo necesita passport-facebook para guardar info de sesion

    userName: { type: S.STRING },
    userEmail: {
      type: S.STRING,
      unique: true,
      validate: { isEmail: true, notEmpty: true }
    },
    password: { type: S.STRING },
    birthDay: { type: S.STRING },
    address: { type: S.STRING },
    salt: { type: S.STRING },
    imgProfile: { type: S.TEXT },
    isAdmin: { type: S.BOOLEAN },
    facebookLog: { type: S.BOOLEAN, defaultValue: false }
  },
  { sequelize: db, modelName: "user" }
);

User.prototype.hashPassword = function (user) {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = crypto
    .createHmac("sha1", user.salt)
    .update(user.password)
    .digest("hex");
};

User.prototype.validPassword = function (password) {
  const match = crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
  if (match == this.password) return true;
  return false;
};

module.exports = User;

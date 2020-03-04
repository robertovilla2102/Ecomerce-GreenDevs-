const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const db = require("./config/db/index");
const cookieParser = require("cookie-parser");

const app = express();
require("./config/passport");
require("./models/index");

//middleware alingresar a la app
app.use(morgan("dev"));

app.set(express.urlencoded({ extendend: true }));
app.set(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

db.sync({ force: false }).then(() => {
  console.log("se ha sincronizado correctamente la db!");
  app.listen(3001, () => {
    console.log("El puerto escucha en el 3001!");
  });
});

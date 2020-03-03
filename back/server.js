const express = require("express");
const app = express();

require("./models/index");

const db = require("./config/db/index");
const morgan = require("morgan");

//middleware alingresar a la app
app.use(morgan("dev"));

app.set(express.urlencoded({ extendend: true }));
app.set(express.json());

db.sync({ force: true }).then(() => {
  console.log("se ha sincronizado correctamente la db!");
  app.listen(3001, () => {
    console.log("El puerto escucha en el 3001!");
  });
});

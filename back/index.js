const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

const db = require("./config/db/index");
const routesAPI = require("./routes");

require("./config/passport");
require("./config/passport-facebook");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routesAPI);
app.use(express.static(__dirname + "/public"));

app.get("/*", (_req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

db.sync({ force: false })
  .then((res) => {
    app.listen(PORT, () =>
      console.log(
        `Server on port "${PORT}" and database "${res.config.database}" connected`
      )
    );
  })
  .catch((err) => console.log(err));

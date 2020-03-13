const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const db = require("./config/db/index");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();
require("./config/passport");
require("./config/passport-facebook");
require("./models/index");

app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
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

app.use("/api", require("./routes/index"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

db.sync({ force: false })
  .then(() => {
    console.log("DB is connected");
    app.listen(app.get("port"), () => {
      console.log("Server on port: ", app.get("port"));
    });
  })

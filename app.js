require("dotenv").config(); // At the top of your main app file

const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const favicon = require("serve-favicon");
const index = require("./API/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(favicon(path.join(__dirname, "src", "favicon.ico")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src")));
app.use(
  expressSession({
    secret: "secret",
  })
);

app.use("/", index);

module.exports = app;

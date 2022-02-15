"use strict";

const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// 라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
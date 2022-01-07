require("dotenv").config();
require("./config/mongodb");
console.log(process.env);

const express = require("express");
// const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT;

app.use(express.static(__dirname + "/public"));

const users = [
  {
    name: "T-Rex 1",
    email: "trex1@trex.com",
    favoriteLanguage: "french",
  },
  {
    name: "T-Rex 2",
    email: "trex2@trex.com",
    favoriteLanguage: "english",
  },
  {
    name: "T-Rex 3",
    email: "trex3@trex.com",
    favoriteLanguage: "japonese",
  },
];

const images = ["/img/virtual-city.jpg", "/img/nft.jpg", "/img/html.jpg"];

console.log("Hello, World");

app.listen(PORT, console.log("working at port " + PORT));

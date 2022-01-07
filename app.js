require("dotenv").config();
require("./config/mongodb");
console.log(process.env);

const express = require("express");
// const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT;

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials")

//const images = ["/img/virtual-city.jpg", "/img/nft.jpg", "/img/html.jpg"];

console.log("Hello, World");

const renderHome = require('./routes/homeRouter')
app.use('/', renderHome)

const renderUsers = require('./routes/usersRouter')
app.use('/users', renderUsers)

app.listen(PORT, console.log("working at port " + PORT));

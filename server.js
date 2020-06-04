const express = require("express");
const logger = require("morgan");
const mongoose =  require("mongoose");

const PORT = process.env.PORT || 3000;

//require models? Does this app need models?

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhose/populatedb", { useNewUrlParser: true });
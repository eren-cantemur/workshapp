const express = require("express");
var cors = require('cors')
require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require("./api")

app.use(api)
module.exports = app;
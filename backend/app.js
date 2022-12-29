const express = require("express");
const fileUpload = require('express-fileupload');
var cors = require('cors')

require('dotenv').config();

const app = express();

app.use(cors());
app.use(fileUpload({
    limits: {
        fileSize: 10000000 //10mb
    },
    abortOnLimit: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require("./api")

app.use(api)
module.exports = app;
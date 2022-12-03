const express = require("express");
var cors = require('cors')
require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const api = require("./api")

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(api)

const PORT =  process.env.PORT | 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
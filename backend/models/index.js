const dbConfig = require("../config/db.config.js");
require('dotenv').config()
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT ,
  port :dbConfig.DBPORT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.js")(sequelize, Sequelize);
db.WorkShopManager = require("./workshopManager.js")(sequelize, Sequelize);
db.Workshop = require("./workshop.js")(sequelize, Sequelize);
db.Review = require("./review.js")(sequelize, Sequelize);
db.Admin = require("./admin.js")(sequelize, Sequelize);
db.Customer = require("./customer.js")(sequelize, Sequelize);
db.WorkShopImage = require("./workshopImage.js")(sequelize, Sequelize);



module.exports = db;
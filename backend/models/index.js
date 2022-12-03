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
db.WorkshopManager = require("./workShopManager.js")(sequelize, Sequelize);
db.Workshop = require("./workShop.js")(sequelize, Sequelize);
db.Review = require("./review.js")(sequelize, Sequelize);
db.Admin = require("./admin.js")(sequelize, Sequelize);
db.Customer = require("./customer.js")(sequelize, Sequelize);
db.WorkshopImage = require("./workShopImage.js")(sequelize, Sequelize);



module.exports = db;
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql',
  port: 3306,
  dialectOptions: {
    ssl: 'Amazon RDS'
  },
  
  
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.js")(sequelize, Sequelize);
db.WorkshopManager = require("./workshopManager.js")(sequelize, Sequelize);
db.Workshop = require("./workshop.js")(sequelize, Sequelize);
db.Review = require("./review.js")(sequelize, Sequelize);
db.Admin = require("./admin.js")(sequelize, Sequelize);
db.Customer = require("./customer.js")(sequelize, Sequelize);
db.WorkshopImage = require("./workshopImage.js")(sequelize, Sequelize);
db.Reservation = require("./reservation.js")(sequelize, Sequelize);
db.Time = require("./time.js")(sequelize, Sequelize);



module.exports = db;
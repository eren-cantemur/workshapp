const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.DBUSERNAME,
  dbConfig.DBPASSWORD,
  {
    host: dbConfig.DBHOST,
    port: dbConfig.DBPORT,
    dialect: "mysql",
    ssl: "Amazon RDS",
    logging: false,
    maxConcurrentQueries: 100,
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: "en",
  }
);

// console.log([
//   dbConfig.DB,
//   dbConfig.DBUSERNAME,
//   dbConfig.DBPASSWORD,
//   {
//     host: dbConfig.DBHOST,
//     port: dbConfig.DBPORT,
//     dialect: "mysql",
//     ssl: "Amazon RDS",
//     logging: console.log,
//     maxConcurrentQueries: 100,
//     pool: { maxConnections: 5, maxIdleTime: 30 },
//     language: "en",
//   },
// ]);
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
db.Address = require("./address.js")(sequelize, Sequelize);
db.Category = require("./category.js")(sequelize, Sequelize);

module.exports = db;

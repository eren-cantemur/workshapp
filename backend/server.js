const app = require("./app");

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const PORT =  process.env.PORT | 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
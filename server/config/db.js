const { Sequelize } = require("sequelize");
const config = require("./config.json");

const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

db.sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Failed to sync database:", err));

module.exports = db;

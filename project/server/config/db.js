var mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "codus0241",
  database: "pizzaalvolo",
  port: 3306,
});

module.exports = db;

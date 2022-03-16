// connect to mysql
const mysql = require("mysql");

var pass = process.env.PASSWORD_MYSQL;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pass,
  database: "algorithm_blog",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  } else {
    console.log("Connect to database successfully!");
  }
});

module.exports = connection;

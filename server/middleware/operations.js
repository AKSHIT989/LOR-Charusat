const mysql = require("mysql2");
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "7868",
  database: process.env.DATABASE || "lor",
});

exports.connectDB = () => {
  return new Promise((resolve, reject) => {
    pool.on('connection', (connection) => {
      connection.on('error', (err) => {
        reject(new Error(`MySQL error event: ${err}`));
      });
      connection.on('close', (err) => {
        reject(new Error(`MySQL close event: ${err}`));
      });
    });
    resolve();
  });
};

exports.getDBInstance = () => pool;
const mysql = require("mysql2");
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
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
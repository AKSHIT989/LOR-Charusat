const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to mysql");
  }
});

exports.authenticateUser = (email, password) => {
    return new Promise((resolve, reject) => {
        db.execute(
            "SELECT email, password FROM user WHERE email=? AND password=?",
            [email, password],
            (err, result) => {
              if (err) {
                reject(err);
              } else {
                if (result.length !== 0) {
                    resolve(true);
                } else {
                  reject("Can't authenticate the user");
                }
              }
            }
          );
    });
};

exports.addUser = (userInfo) => {
    return new Promise ((resolve, reject) => {
        db.execute(
            `INSERT INTO user(charusat_id, user_type, first_name, last_name, inst, degree, mobile, email, password) 
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userInfo.charusat_id, userInfo.user_type, userInfo.first_name, userInfo.last_name,
                userInfo.inst, userInfo.degree, userInfo.mobile, userInfo.email, userInfo.password] ,
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length !== 0) {
                        resolve("New User Added");
                    } else {
                        reject(new Error("Error! Can't add the user"));
                    }
                }
            }
        );
    });
}

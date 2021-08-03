const { getDBInstance } = require("./operations");
const { createHash } = require("crypto");
const db = getDBInstance();

const generateHash = (text) => {
  const hash = createHash("sha512");
  return hash.update(text, "utf-8").digest("hex");
};

exports.addUser = (userInfo) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO user(charusat_id, user_type, first_name, last_name, inst, degree, mobile, email, password) 
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userInfo.charusat_id,
        userInfo.user_type,
        userInfo.first_name,
        userInfo.last_name,
        userInfo.inst,
        userInfo.degree,
        userInfo.mobile,
        userInfo.email,
        generateHash(userInfo.password),
      ],
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
};

const { getDBInstance } = require("./operations");
const { createHash } = require("crypto");
const db = getDBInstance();

const generateHash = (text) => {
  const hash = createHash("sha512");
  return hash.update(text, "utf-8").digest("hex");
};

exports.authenticateUser = (email, password) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "SELECT email, password FROM user WHERE email=? AND password=?",
      [email, generateHash(password)],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            resolve(true);
          } else {
            reject(new Error("Can't authenticate the user"));
          }
        }
      }
    );
  });
};

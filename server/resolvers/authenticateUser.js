const { getDBInstance } = require("./operations");
const { createHash } = require("crypto");
const { generateToken } = require("../middleware/authenticate");
const db = getDBInstance();

const generateHash = (text) => {
  const hash = createHash("sha512");
  return hash.update(text, "utf-8").digest("hex");
};

exports.authenticateUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "SELECT email, password FROM user WHERE email=? AND password=?",
      [email, generateHash(password)],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            const accessTokenOptions = {
              expiresIn: "30min",
              issuer: `${process.env.HOST}:${process.env.SERVER_PORT}`,
            };
            const refreshTokenOptions = {
              issuer: `${process.env.HOST}:${process.env.SERVER_PORT}`,
            };
            const accessToken = generateToken(
              { email },
              accessTokenOptions,
              "access-secret.key"
            );
            const refreshToken = generateToken(
              { email },
              refreshTokenOptions,
              "refresh-secret.key"
            );
            resolve({ accessToken, refreshToken, authenticated: true });
          } else {
            reject(new Error("Can't authenticate the user"));
          }
        }
      }
    );
  });
};

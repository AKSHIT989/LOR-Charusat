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
      "SELECT id, user_type, email FROM user WHERE email=? AND password=?",
      [email, generateHash(password)],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            const accessTokenOptions = {
              expiresIn: "30min",
              issuer: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
            };
            const refreshTokenOptions = {
              issuer: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
            };
            const accessToken = generateToken(
              {
                email,
                user_type: result[0].user_type,
                user_id: result[0].id,
              },
              accessTokenOptions,
              "access-secret.key"
            );
            const refreshToken = generateToken(
              {
                email,
                user_type: result[0].user_type,
                user_id: result[0].id,
              },
              refreshTokenOptions,
              "refresh-secret.key"
            );
            resolve({
              access_token: accessToken,
              refresh_token: refreshToken,
              authenticated: true,
              user_id: result[0].id,
              user_type: result[0].user_type,
              email: result[0].email,
            });
          } else {
            reject(new Error("Can't authenticate the user"));
          }
        }
      }
    );
  });
};

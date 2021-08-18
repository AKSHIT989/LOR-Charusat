const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { writeFileSync, readFileSync } = require("fs");
require("dotenv").config();

exports.generateToken = (payload, options, keyFile) => {
  const key = readFileSync(keyFile, "utf-8");
  return jwt.sign(payload, key, options);
};

exports.authenticateToken = (headers) => {
  const authHeader = headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const key = readFileSync("access-secret.key", "utf-8");
  if (token == null) return new Error("Error 401: Unauthorized user");

  return jwt.verify(token, key, (err, data) => {
    if (err) {
      console.log(err);
      return new Error("Error 403: Forbidden");
    }
    return true;
  });
};

exports.refreshToken = (email, refreshToken) => {
  const key = readFileSync("refresh-secret.key", "utf-8");
  if (refreshToken == null) return new Error("Error 401: Unauthorized user");

  return jwt.verify(refreshToken, key, (err, data) => {
    if (err) {
      console.log(err);
      return new Error("Error 403: Forbidden");
    }
    const accessTokenOptions = {
      expiresIn: "30min",
      issuer: `${process.env.HOST}:${process.env.SERVER_PORT}`,
    };
    const key = readFileSync("access-secret.key", "utf-8");
    const accessToken = jwt.sign({ email }, key, accessTokenOptions);
    return { authenticated: true, accessToken };
  });
};

exports.generateKeySecret = () => {
  const accessKeySecret = randomBytes(4096).toString("hex");
  writeFileSync("access-secret.key", accessKeySecret);
  const refreshKeySecret = randomBytes(4096).toString("hex");
  writeFileSync("refresh-secret.key", refreshKeySecret);
};

const { enc, AES, lib } = require("crypto-js");
const { createHash } = require("crypto");

exports.encrypt = (graphqlString) => {
  const secretKey = lib.WordArray.random(256).toString();
  const encryptedData =
    AES.encrypt(graphqlString, secretKey).toString() + "." + secretKey;
  return encryptedData;
};

exports.decrypt = (data) => {
  const [graphqlString, secretKey] = data.split(".");
  const bytes = AES.decrypt(graphqlString, secretKey);
  return bytes.toString(enc.Utf8);
};

exports.hash = (data) => createHash("sha256").update(data).digest("hex");

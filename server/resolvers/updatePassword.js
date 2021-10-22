const { createHash } = require("crypto");
const { getDBInstance } = require("./operations");
const db = getDBInstance();

const generateHash = (text) => {
    const hash = createHash("sha512");
    return hash.update(text, "utf-8").digest("hex");
};

exports.updatePassword = async (email, password) => {
    return new Promise((resolve, reject) => {
        db.execute(
            "UPDATE lor.user SET password=? WHERE email=?",
            [generateHash(password), email],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.affectedRows !== 0) {
                        resolve("Password set successfully");
                    } else {
                        reject(new Error("Can't update password"));
                    }
                }
            }
        );
    });
};

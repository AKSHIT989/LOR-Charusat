const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getStuPersonalDetails = async (user_id) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT usr.first_name, usr.last_name, usr.charusat_id, usr.mobile
        FROM lor.user usr WHERE usr.id=?`,
        [user_id],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (result.length !== 0) {
                    resolve(result[0]);
                } else {
                    resolve(null);
                }
            }
        });
    });
};
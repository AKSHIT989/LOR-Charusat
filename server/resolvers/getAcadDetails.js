const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getAcadDetails = async (user_id) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT sem, cgpa, attendance FROM lor.academic_details 
        WHERE user_id=? ORDER BY sem`,
        [user_id],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (result.length !== 0) {
                    resolve(result);
                } else {
                    reject(new Error("Can't fetch the academic details"));
                }
            }
        });
    });
};
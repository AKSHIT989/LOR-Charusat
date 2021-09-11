const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getUniPref = async (user_id) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT course_name, country_name, university_name, intake_date 
        FROM lor.uni_pref WHERE user_id=?`,
        [user_id],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (result.length !== 0) {
                    resolve(result);
                } else {
                    reject(new Error("Can't fetch the university preferences"));
                }
            }
        });
    });
};
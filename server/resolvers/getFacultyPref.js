const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getFacultyPref = async (user_id) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT fp.id, fp.faculty_name, fp.faculty_email, fp.stu_upload
            FROM lor.faculty_pref fp WHERE fp.user_id=?`,
        [user_id],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (result.length !== 0) {
                    resolve(result);
                } else {
                    resolve(null);
                }
            }
        });
    });
};
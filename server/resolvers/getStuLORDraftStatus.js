const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getStuLORDraftStatus = async (user_id) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT fp.faculty_name, fp.remark, IF(fp.approved, "Completed", "Pending") as status
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
                    reject(new Error("Can't fetch the lor draft status"));
                }
            }
        });
    });
};
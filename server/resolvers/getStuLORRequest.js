const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getStuLORRequest = async (user_id) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT 
        lr.passout_date, lr.parent_mobile,
        lr.placed_cdpc, lr.company, lr.bond_completed,
        lr.letter_head, lr.lor_status, lr.issue_date
        FROM lor.lor_request lr, lor.user usr WHERE lr.user_id=? AND lr.user_id=usr.id`,
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
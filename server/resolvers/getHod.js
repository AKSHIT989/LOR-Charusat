const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getHod = async (institute, department) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT usr.email, CONCAT_WS(" ", usr.first_name, usr.last_name) as name FROM lor.user usr 
        WHERE usr.institute=? AND usr.department=? AND usr.user_type="HOD"`,
        [institute, department],
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
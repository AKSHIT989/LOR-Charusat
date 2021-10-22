const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getDepartments = async (institute) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT DISTINCT department FROM lor.institute_department WHERE institute=?`,
        [institute],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (result.length !== 0) {
                    resolve(result.map(row => row.department));
                } else {
                    resolve(null);
                }
            }
        });
    });
};
const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getInstitutes = async () => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT DISTINCT institute FROM lor.institute_department`,
        [],
        (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (result.length !== 0) {
                    resolve(result.map(row => row.institute));
                } else {
                    resolve(null);
                }
            }
        });
    });
};
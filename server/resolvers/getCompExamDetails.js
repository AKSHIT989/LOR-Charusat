const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.getCompExamDetails = async (user_id) => {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT id, exam_name, mark, upload_file
        FROM lor.comp_exam_details WHERE user_id=?`,
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
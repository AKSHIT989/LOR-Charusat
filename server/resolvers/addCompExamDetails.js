const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.addCompExamDetails = async (userId, compExamDetails) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO comp_exam_details(user_id, mark, exam_name, upload_file) 
          VALUES(?, ?, ?, ?)`,
      [
        userId ? parseInt(userId) : null,
        compExamDetails.mark ? parseFloat(compExamDetails.mark) : null,
        compExamDetails.examName || null,
        compExamDetails.uploadFile || null,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            resolve(true);
          } else {
            reject(new Error("Error! Can't add competitive exam details"));
          }
        }
      }
    );
  });
};

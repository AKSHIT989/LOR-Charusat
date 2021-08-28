const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.addAcademicDetails = async (userId, academicDetails) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO academic_details(user_id, cgpa, attendance, sem) 
          VALUES(?, ?, ?, ?)`,
      [
        userId ? parseInt(userId) : null,
        academicDetails.cgpa ? parseFloat(academicDetails.cgpa) : null,
        academicDetails.attendance ? parseFloat(academicDetails.attendance) : null,
        academicDetails.sem ? parseInt(academicDetails.sem) : null,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            resolve(true);
          } else {
            reject(new Error("Error! Can't add academic details"));
          }
        }
      }
    );
  });
};

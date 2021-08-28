const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.addFacultyPref = async (userId, facultyPref) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO faculty_pref(user_id, faculty_name, faculty_email, upload_lor) 
          VALUES(?, ?, ?, ?)`,
      [
        userId ? parseInt(userId) : null,
        facultyPref.facultyName || null,
        facultyPref.facultyEmail || null,
        facultyPref.uploadLor || null,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            resolve(true);
          } else {
            reject(new Error("Error! Can't add faculty preference"));
          }
        }
      }
    );
  });
};

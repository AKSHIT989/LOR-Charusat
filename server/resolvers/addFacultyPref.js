const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.addFacultyPref = async (user_id, facultyPref) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO faculty_pref(user_id, faculty_name, faculty_email, upload_lor) 
          VALUES(?, ?, ?, ?)`,
      [
        user_id ? parseInt(user_id) : null,
        facultyPref.faculty_name || null,
        facultyPref.faculty_email || null,
        facultyPref.upload_lor || null,
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

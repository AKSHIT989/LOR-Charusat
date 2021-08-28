const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.addUniPref = async (userId, uniPref) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO uni_pref(user_id, course_name, country_name, university_name, intake_date) 
          VALUES(?, ?, ?, ?, ?)`,
      [
        userId ? parseInt(userId) : null,
        uniPref.courseName || null,
        uniPref.countryName || null,
        uniPref.universityName || null,
        uniPref.intakeDate ? new Date(uniPref.intakeDate) : null,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            resolve(true);
          } else {
            reject(new Error("Error! Can't add university preference"));
          }
        }
      }
    );
  });
};

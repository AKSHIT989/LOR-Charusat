const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.addUniPref = async (user_id, uniPref) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO uni_pref(user_id, course_name, country_name, university_name, intake_date) 
          VALUES(?, ?, ?, ?, ?)`,
      [
        user_id ? parseInt(user_id) : null,
        uniPref.course_name || null,
        uniPref.country_name || null,
        uniPref.university_name || null,
        uniPref.intake_date ? new Date(uniPref.intake_date) : null,
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

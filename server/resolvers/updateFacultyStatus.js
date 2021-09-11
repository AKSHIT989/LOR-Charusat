const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.updateFacultyStatus = async (id, approved) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "UPDATE faculty_pref SET approved=? WHERE id=?",
      [approved, id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.affectedRows !== 0) {
            resolve("Faculty status updated successfully");
          } else {
            reject(new Error("Can't update faculty status"));
          }
        }
      }
    );
  });
};

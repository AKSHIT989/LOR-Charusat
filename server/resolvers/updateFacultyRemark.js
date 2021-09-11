const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.updateFacultyRemark = async (id, remark) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "UPDATE faculty_pref SET remark=? WHERE id=?",
      [remark, id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.affectedRows !== 0) {
            resolve("Faculty remark updated successfully");
          } else {
            reject(new Error("Can't update faculty remark"));
          }
        }
      }
    );
  });
};

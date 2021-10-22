const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.updateFacultyStatus = async (ids, approved) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        connection.release();
        reject(new Error("Connectionn Error. Try again."));
      }
      connection.beginTransaction((err) => {
        if (err) {
          connection.rollback(() => connection.release());
          console.log(err);
          reject(new Error("Connection Error. Try again."));
        }
      });
      try {
        const updateString = getUpdateString();
        ids.forEach(id => {
          connection.execute(updateString, [approved, id], (err) => {
            if (err) {
              throw err;
            }
          })
        });
        connection.commit((err) => {
          if (err) {
            throw err;
          } else {
            connection.release();
            resolve();
          }
        });
        connection.release();
      } catch (err) {
        connection.rollback(() => connection.release());
        console.log(err);
        reject(new Error("Can't update status"));
      }
    });
  })
};

const getUpdateString = () => {
  return "UPDATE lor.faculty_pref SET approved=? WHERE id=?";
}
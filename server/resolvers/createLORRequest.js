const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.createLORRequest = async (user_id, lorRequestInfo) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO lor_request(user_id, parent_mobile, passout_date,
            placed_cdpc, company, bond_completed, 
              letter_head, lor_status) 
                VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id ? parseInt(user_id) : null,
        lorRequestInfo.parent_mobile || null,
        lorRequestInfo.passout_date ? new Date(lorRequestInfo.passout_date) : null,
        lorRequestInfo.placed_cdpc || null,
        lorRequestInfo.company || null,
        lorRequestInfo.bond_completed || null,
        lorRequestInfo.letter_head ? parseInt(lorRequestInfo.letter_head) : null,
        lorRequestInfo.lor_status || null,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length !== 0) {
            resolve("Created new LOR Request");
          } else {
            reject(new Error("Error! Can't create a LOR Request"));
          }
        }
      }
    );
  });
};

const { getDBInstance } = require("./operations");
const db = getDBInstance();

exports.createLORRequest = async (userId, lorRequestInfo) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO lor_request(user_id, parent_mobile, passout_date,
            placed_cdpc, company, bond_completed, 
              letter_head, lor_status) 
                VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId ? parseInt(userId) : null,
        lorRequestInfo.parentMobile || null,
        lorRequestInfo.passoutDate ? new Date(lorRequestInfo.passoutDate) : null,
        lorRequestInfo.placedCdpc || null,
        lorRequestInfo.company || null,
        lorRequestInfo.bondCompleted || null,
        lorRequestInfo.letterHead ? parseInt(lorRequestInfo.letterHead) : null,
        lorRequestInfo.lorStatus || null,
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

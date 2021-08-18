const { json } = require("express");
const { getDBInstance } = require("../../middleware/operations");
const db = getDBInstance();

const CurrentDate = new Date();
const CurrentDateISO = CurrentDate.toISOString();

module.exports = {
  createLor_Request: async (args) => {
    try {
      // const userID = await User.findOne({ email: args.userInput.email });

      // if (userID) {
      //   throw new Error("User exists already.");
      // }

      return new Promise((resolve, reject) => {
        db.execute(
          `INSERT INTO lor_request(user_id,parent_mobile,passout_date,placed_cdpc,company,bond_completed,academic_detail,c_exam_details,letter_head,lor_remarks,faculty_preference,lor_status,issue_date) 
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            args.lor_requestInfo.user_id,
            args.lor_requestInfo.parent_mobile,
            new Date(args.lor_requestInfo.passout_date),
            args.lor_requestInfo.placed_cdpc,
            args.lor_requestInfo.company || null,
            args.lor_requestInfo.bond_completed || null,
            JSON.stringify(args.lor_requestInfo.academic_detail),
            JSON.stringify(args.lor_requestInfo.competitive_exam_details),
            args.lor_requestInfo.letter_head,
            JSON.stringify(args.lor_requestInfo.university_preference_list),
            JSON.stringify(args.lor_requestInfo.faculty_preference),
            "pending",
            CurrentDate,
          ],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              if (result.length !== 0) {
                resolve("New User Added");
              } else {
                reject(new Error("Error! Can't add the user"));
              }
            }
          }
        );
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

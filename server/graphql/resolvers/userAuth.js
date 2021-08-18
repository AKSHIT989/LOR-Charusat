// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const { getDBInstance } = require("../../middleware/operations");
const { createHash } = require("crypto");
const db = getDBInstance();

const generateHash = (text) => {
  const hash = createHash("sha512");
  return hash.update(text, "utf-8").digest("hex");
};

module.exports = {
  createUser: async (args) => {
    try {
      // const userID = await User.findOne({ email: args.userInput.email });

      // if (userID) {
      //   throw new Error("User exists already.");
      // }

      return new Promise((resolve, reject) => {
        db.execute(
          `INSERT INTO user(charusat_id, user_type, first_name, last_name, inst, degree, mobile, email, password) 
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            args.userInfo.charusat_id,
            args.userInfo.user_type,
            args.userInfo.first_name,
            args.userInfo.last_name,
            args.userInfo.inst,
            args.userInfo.degree,
            args.userInfo.mobile,
            args.userInfo.email,
            generateHash(args.userInfo.password),
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
      throw err;
    }
  },

  userlogin: async ({ username, password }) => {
    console.log(username);
    console.log(password);
    const user = await User.findOne({ email: username });
    if (!user) {
      throw new Error("User not exist!");
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }

    const token = jwt.sign(
      { userId: user.id, useremail: user._doc.email, userType: "USER" },
      "superkey",
      {
        expiresIn: "1d",
      }
    );

    return {
      userId: user.id,
      token: token,
      userType: "USER",
    };
  },
  userProfile: async (req) => {
    if (!req.isAuth) {
      throw new Error({ status: "error", error: "You not have access" });
    }
    if (req.userType !== "USER") {
      throw new Error({ status: "error", error: "You not have access" });
    }

    try {
      const user = await User.findById({ _id: req.userId });
      return {
        ...user._doc,
        _id: user.id,
      };
    } catch (err) {
      console.log(err);
    }
  },
  
};

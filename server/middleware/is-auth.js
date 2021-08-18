const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  console.log("Authorization \t" + authHeader);
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(" ")[0];
  console.log("\n token \t" + token);
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "superkey");
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  console.log(
    "\n decoded userid \t" +
      decodedToken.userId +
      "\n decoded usertype \t" +
      decodedToken.userType
  );

  req.isAuth = true;
  req.userId = decodedToken.userId;
  req.userEmail = decodedToken.useremail;
  req.userType = decodedToken.userType;
  next();
};

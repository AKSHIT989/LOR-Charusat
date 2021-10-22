const express = require("express");
var createError = require("http-errors");
const expressFileUpload = require("express-fileupload");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema/schemas");
const { connectDB } = require("./resolvers/operations");
require("dotenv").config();
const cors = require("cors");
const { generateKeySecret } = require("./middleware/authenticate");
const { decrypt, encrypt } = require("./utilities/secure");
const { sendFile, uploadFile, deleteFile } = require("./file-management");
const app = express();

const encryptResponse = (req, res, next) => {
  const originalSend = res.send;
  res.send = (data) => {
    arguments[0] = JSON.stringify({ text: encrypt(data) });
    originalSend.apply(res, arguments);
  };
  next();
};

const decryptRequest = (req, res, next) => {
  const decryptedText = decrypt(req.body.text);
  req.body = JSON.parse(decryptedText);
  next();
};

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to mysql");

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(expressFileUpload());

    generateKeySecret();

    app.use("/graphql", decryptRequest);
    app.use("/graphql", encryptResponse);

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      })
    );

    app.post("/upload/file", uploadFile);
    app.post("/delete/file", deleteFile);
    app.use("/view/file/:fileName", sendFile);


    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};
      console.log(err);
      // render the error page
      res.status(err.status || 500).json({ msg: "Error" });
      // res.render("error");
    });
  } catch (err) {
    console.log(err);
  }

  app.listen(process.env.SERVER_PORT, () =>
    console.log(`Server running on port ${process.env.SERVER_PORT}`)
  );
};

startServer();

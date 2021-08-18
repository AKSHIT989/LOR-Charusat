const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");

const { connectDB } = require("./middleware/operations");
// const isAuth = require("./middleware/is-auth");
const graphQlschema = require("./graphql/schema/index");
const graphQlresolvers = require("./graphql/resolvers/index");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPITIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  // res.setHeader("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// app.use(isAuth);

app.use(
  "/lor",
  graphqlHTTP({
    schema: graphQlschema,
    rootValue: graphQlresolvers,
    graphiql: true,
  })
);

const port = process.env.SERVER_PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to mysql");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

startServer();

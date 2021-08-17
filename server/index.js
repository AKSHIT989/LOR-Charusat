const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema/schemas");
const { connectDB } = require("./resolvers/operations");
require("dotenv").config();
const cors = require("cors");
const { generateKeySecret } = require("./middleware/authenticate");
const app = express();

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to mysql");

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    generateKeySecret();

    app.listen(process.env.SERVER_PORT, () =>
      console.log(`Server running on port ${process.env.SERVER_PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

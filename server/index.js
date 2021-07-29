const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schemas");
require("dotenv").config();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(process.env.SERVER_PORT, () => console.log(`Server running on port ${process.env.SERVER_PORT}`));

const { buildSchema } = require("graphql");
const { userType } = require("./userSchema");
const { studentType } = require("./studentSchema");


const schema = `

  ${userType}
  ${studentType}

  type RootQuery {
    userProfile : Student!
    lorRequest(userId: Int!) : [Lor_Request!]
  }
    
  type RootMutation {
    createUser(userInfo: StudentInput): String!
    createLor_Request(lor_requestInfo: Lor_RequestInput): String!
  }
    
  schema {
      query: RootQuery
      mutation: RootMutation
  }
`;

module.exports = buildSchema(schema);

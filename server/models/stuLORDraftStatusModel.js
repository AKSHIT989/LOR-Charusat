const {
    GraphQLObjectType,
    GraphQLString,
  } = require("graphql");
  
  exports.stuLORDraftStatusModel = new GraphQLObjectType({
    name: "stuLORDraftStatus",
    fields: () => ({
      faculty_name: { type: GraphQLString },
      remark: { type: GraphQLString },
      status: { type: GraphQLString },
    }),
  });
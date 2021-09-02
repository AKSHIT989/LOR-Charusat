const { GraphQLString, GraphQLObjectType, GraphQLInt } = require("graphql");

exports.hodRequestsModel = new GraphQLObjectType({
    name: "hodRequest",
    fields: () => ({
      id: { type: GraphQLInt },
      charusat_id: {type: GraphQLString},
      stu_name: {type: GraphQLString},
      upload_lor: {type: GraphQLString},
      status: {type: GraphQLString},
      remark: {type: GraphQLString},
    }),
  })
  
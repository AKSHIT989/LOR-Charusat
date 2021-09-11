const { GraphQLString, GraphQLObjectType, GraphQLInt } = require("graphql");

exports.tprRequestsModel = new GraphQLObjectType({
    name: "tprRequest",
    fields: () => ({
      id: { type: GraphQLInt },
      charusat_id: {type: GraphQLString},
      stu_name: {type: GraphQLString},
      remark: {type: GraphQLString},
      upload_lor: {type: GraphQLString},
      status: {type: GraphQLString},
    }),
  })
  
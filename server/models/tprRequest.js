const { GraphQLString, GraphQLObjectType, GraphQLInt } = require("graphql");

exports.tprRequestsModel = new GraphQLObjectType({
    name: "tprRequest",
    fields: () => ({
      id: { type: GraphQLInt },
      charusat_id: {type: GraphQLString},
      stu_name: {type: GraphQLString},
      stu_email: {type: GraphQLString},
      remark: {type: GraphQLString},
      stu_upload: {type: GraphQLString},
      faculty_upload: {type: GraphQLString},
      status: {type: GraphQLString},
    }),
  })
  
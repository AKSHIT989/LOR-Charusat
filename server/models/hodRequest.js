const { GraphQLString, GraphQLObjectType, GraphQLInt } = require("graphql");

exports.hodRequestsModel = new GraphQLObjectType({
    name: "hodRequest",
    fields: () => ({
      id: { type: GraphQLInt },
      charusat_id: {type: GraphQLString},
      stu_name: {type: GraphQLString},
      stu_email: {type: GraphQLString},
      stu_upload: {type: GraphQLString},
      faculty_upload: {type: GraphQLString},
      status: {type: GraphQLString},
      remark: {type: GraphQLString},
    }),
  })
  
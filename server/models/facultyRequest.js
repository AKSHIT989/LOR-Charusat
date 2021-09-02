const { GraphQLString, GraphQLObjectType, GraphQLInt } = require("graphql");

exports.facultyRequestsModel = new GraphQLObjectType({
    name: "facultyRequest",
    fields: () => ({
      id: { type: GraphQLInt },
      charusat_id: {type: GraphQLString},
      stu_name: {type: GraphQLString},
      remark: {type: GraphQLString},
      upload_lor: {type: GraphQLString},
    }),
  })
  
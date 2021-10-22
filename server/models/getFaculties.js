const { GraphQLString, GraphQLObjectType } = require("graphql");

exports.getFacultiesModel = new GraphQLObjectType({
    name: "facultyList",
    fields: () => ({
      name: {type: GraphQLString},
      email: {type: GraphQLString},
    }),
  })
  
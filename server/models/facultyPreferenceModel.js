const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

exports.facultyPreferenceModel = new GraphQLObjectType({
  name: "facultyReference",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    facultyName: { type: GraphQLString },
    facultyEmail: { type: GraphQLString },
    remark: { type: GraphQLString },
    uploadLor: { type: GraphQLString },
  }),
});

exports.facultyPreferenceInputModel = new GraphQLInputObjectType({
  name: "facultyReferenceInput",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    facultyName: { type: GraphQLString },
    facultyEmail: { type: GraphQLString },
    remark: { type: GraphQLString },
    uploadLor: { type: GraphQLString },
  }),
});

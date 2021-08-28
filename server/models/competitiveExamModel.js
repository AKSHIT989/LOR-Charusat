const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");

exports.competitiveExamModel = new GraphQLObjectType({
  name: "competitiveExam",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    examName: { type: GraphQLString },
    mark: { type: GraphQLFloat },
    uploadFile: { type: GraphQLString },
  }),
});

exports.competitiveExamInputModel = new GraphQLInputObjectType({
  name: "competitiveExamInput",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    examName: { type: GraphQLString },
    mark: { type: GraphQLFloat },
    uploadFile: { type: GraphQLString },
  }),
});

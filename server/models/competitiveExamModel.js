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
    user_id: { type: GraphQLInt },
    exam_name: { type: GraphQLString },
    mark: { type: GraphQLFloat },
    upload_file: { type: GraphQLString },
  }),
});

exports.competitiveExamInputModel = new GraphQLInputObjectType({
  name: "competitiveExamInput",
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    exam_name: { type: GraphQLString },
    mark: { type: GraphQLFloat },
    upload_file: { type: GraphQLString },
  }),
});

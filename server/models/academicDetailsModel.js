const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

exports.academicDetailsModel = new GraphQLObjectType({
  name: "academicDetails",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    sem: { type: GraphQLInt },
    attendance: { type: GraphQLFloat },
    cgpa: { type: GraphQLFloat },
  }),
});

exports.academicDetailsInputModel = new GraphQLInputObjectType({
  name: "academicDetailsInput",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    sem: { type: GraphQLInt },
    attendance: { type: GraphQLFloat },
    cgpa: { type: GraphQLFloat },
  }),
});

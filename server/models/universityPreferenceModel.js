const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} = require("graphql");

exports.universityPreferenceModel = new GraphQLObjectType({
  name: "universityPreference",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    universityName: { type: GraphQLString },
    courseName: { type: GraphQLString },
    countryName: { type: GraphQLString },
    intakeDate: { type: GraphQLString },
  }),
});

exports.universityPreferenceInputModel = new GraphQLInputObjectType({
  name: "universityPreferenceInput",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    universityName: { type: GraphQLString },
    courseName: { type: GraphQLString },
    countryName: { type: GraphQLString },
    intakeDate: { type: GraphQLString },
  }),
});

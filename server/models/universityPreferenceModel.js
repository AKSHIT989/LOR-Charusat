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
    user_id: { type: GraphQLInt },
    university_name: { type: GraphQLString },
    course_name: { type: GraphQLString },
    country_name: { type: GraphQLString },
    intake_date: { type: GraphQLString },
  }),
});

exports.universityPreferenceInputModel = new GraphQLInputObjectType({
  name: "universityPreferenceInput",
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    university_name: { type: GraphQLString },
    course_name: { type: GraphQLString },
    country_name: { type: GraphQLString },
    intake_date: { type: GraphQLString },
  }),
});

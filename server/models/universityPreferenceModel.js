const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} = require("graphql");
const { ScalarDate } = require("./ScalarDate");

exports.universityPreferenceModel = new GraphQLObjectType({
  name: "universityPreference",
  fields: () => ({
    id: { type: GraphQLInt },
    user_id: { type: GraphQLInt },
    university_name: { type: GraphQLString },
    course_name: { type: GraphQLString },
    country_name: { type: GraphQLString },
    intake_date: { type: ScalarDate },
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
    intake_date: { type: ScalarDate },
  }),
});

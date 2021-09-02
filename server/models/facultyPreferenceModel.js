const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require("graphql");

exports.facultyPreferenceModel = new GraphQLObjectType({
  name: "facultyPreference",
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    faculty_name: { type: GraphQLString },
    faculty_email: { type: GraphQLString },
    remark: { type: GraphQLString },
    approved: { type: GraphQLBoolean },
    upload_lor: { type: GraphQLString },
  }),
});

exports.facultyPreferenceInputModel = new GraphQLInputObjectType({
  name: "facultyPreferenceInput",
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    faculty_name: { type: GraphQLString },
    faculty_email: { type: GraphQLString },
    remark: { type: GraphQLString },
    approved: { type: GraphQLBoolean },
    upload_lor: { type: GraphQLString },
  }),
});
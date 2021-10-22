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
    id: { type: GraphQLInt },
    user_id: { type: GraphQLInt },
    faculty_name: { type: GraphQLString },
    faculty_email: { type: GraphQLString },
    remark: { type: GraphQLString },
    approved: { type: GraphQLBoolean },
    stu_upload: { type: GraphQLString },
    faculty_upload: { type: GraphQLString },
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
    stu_upload: { type: GraphQLString },
    faculty_upload: { type: GraphQLString },
  }),
});
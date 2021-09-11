const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const { academicDetailsModel } = require("./academicDetailsModel");
const { competitiveExamModel } = require("./competitiveExamModel");
const { facultyPreferenceModel } = require("./facultyPreferenceModel");
const { universityPreferenceModel } = require("./universityPreferenceModel");

const lorRequestModel = new GraphQLObjectType({
  name: "lorRequest",
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    charusat_id: { type: GraphQLString },
    mobile: { type: GraphQLString },
    parent_mobile: { type: GraphQLString },
    passout_date: { type: GraphQLString },
    placed_cdpc: { type: GraphQLBoolean },
    company: { type: GraphQLString },
    bond_completed: { type: GraphQLBoolean },
    letter_head: { type: GraphQLInt },
    lor_status: { type: GraphQLString },
    issue_date: { type: GraphQLString },
  }),
});

exports.lorRequestInputModel = new GraphQLInputObjectType({
  name: "lorRequestInput",
  fields: () => ({
    id: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    parent_mobile: { type: GraphQLString },
    passout_date: { type: GraphQLString },
    placed_cdpc: { type: GraphQLBoolean },
    company: { type: GraphQLString },
    bond_completed: { type: GraphQLBoolean },
    letter_head: { type: GraphQLInt },
    lor_status: { type: GraphQLString },
    issue_date: { type: GraphQLString },
  }),
});

exports.wholeLORRequest = new GraphQLObjectType({
  name: "wholeLORRequest",
  fields: () => ({
    lor_request: { type: lorRequestModel},
    acad_details: { type: GraphQLList(academicDetailsModel)},
    comp_exam_details: { type: GraphQLList(competitiveExamModel) },
    uni_pref: { type: GraphQLList(universityPreferenceModel) },
    faculty_pref: { type: GraphQLList(facultyPreferenceModel) },
  }),
});

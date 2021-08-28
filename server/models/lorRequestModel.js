const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  // GraphQLList,
} = require("graphql");
// const { academicDetailsModel, academicDetailsInputModel } = require("./academicDetailsModel");
// const { competitiveExamModel, competitiveExamInputModel } = require("./competitiveExamModel");
// const { facultyPreferenceModel, facultyPreferenceInputModel } = require("./facultyPreferenceModel");
// const { universityPreferenceModel, universityPreferenceInputModel } = require("./universityPreferenceModel");

exports.lorRequestModel = new GraphQLObjectType({
  name: "lorRequest",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    parentMobile: { type: GraphQLString },
    passoutDate: { type: GraphQLString },
    placedCdpc: { type: GraphQLBoolean },
    company: { type: GraphQLString },
    bondCompleted: { type: GraphQLBoolean },
    // academicDetails: { type: GraphQLList(academicDetailsModel) },
    // competitiveExamDetails: { type: GraphQLList(competitiveExamModel) },
    letterHead: { type: GraphQLInt },
    // universityPreferenceList: { type: GraphQLList(universityPreferenceModel) },
    // facultyPreferenceList: { type: GraphQLList(facultyPreferenceModel) },
    lorStatus: { type: GraphQLString },
    // lorRemarks: { type: GraphQLString },
    issueDate: { type: GraphQLString },
  }),
});

exports.lorRequestInputModel = new GraphQLInputObjectType({
  name: "lorRequestInput",
  fields: () => ({
    id: { type: GraphQLString },
    userId: { type: GraphQLInt },
    parentMobile: { type: GraphQLString },
    passoutDate: { type: GraphQLString },
    placedCdpc: { type: GraphQLBoolean },
    company: { type: GraphQLString },
    bondCompleted: { type: GraphQLBoolean },
    // academicDetails: { type: GraphQLList(academicDetailsInputModel) },
    // competitiveExamDetails: { type: GraphQLList(competitiveExamInputModel) },
    letterHead: { type: GraphQLInt },
    // universityPreferenceList: { type: GraphQLList(universityPreferenceInputModel) },
    // facultyPreferenceList: { type: GraphQLList(facultyPreferenceInputModel) },
    lorStatus: { type: GraphQLString },
    // lorRemarks: { type: GraphQLString },
    issueDate: { type: GraphQLString },
  }),
});

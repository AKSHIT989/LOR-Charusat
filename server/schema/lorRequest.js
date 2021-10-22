const { GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { lorRequestInputModel } = require("../models/lorRequestModel");
const { academicDetailsInputModel } = require('../models/academicDetailsModel');
const { universityPreferenceInputModel } = require('../models/universityPreferenceModel');
const { competitiveExamInputModel } = require('../models/competitiveExamModel');
const { facultyPreferenceInputModel } = require('../models/facultyPreferenceModel');
const { personalDetailsInputModel } = require('../models/personalDetailsModel');
const { insertLORRequest } = require('../resolvers/insertLORRequest');

exports.lorRequest = {
    type: GraphQLString,
    args: {
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        lorRequestInfo: { type: lorRequestInputModel },
        personalDetails: { type: personalDetailsInputModel },
        academicDetails: { type: GraphQLList(academicDetailsInputModel) },
        universityPreferenceList: { type: GraphQLList(universityPreferenceInputModel) },
        facultyPreferenceList: { type: GraphQLList(facultyPreferenceInputModel) },
        competitiveExamDetails: { type: GraphQLList(competitiveExamInputModel) },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                await insertLORRequest(args.user_id, args.lorRequestInfo, args.personalDetails, args.academicDetails, args.competitiveExamDetails, args.universityPreferenceList, args.facultyPreferenceList);
                return "Request executed successfully";
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
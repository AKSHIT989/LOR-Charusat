const { GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { lorRequestInputModel } = require("../models/lorRequestModel");
const { createLORRequest } = require('../resolvers/createLORRequest');
const { addCompExamDetails } = require('../resolvers/addCompExamDetails');
const { addAcademicDetails } = require('../resolvers/addAcadDetails');
const { addUniPref } = require('../resolvers/addUniPref');
const { addFacultyPref } = require('../resolvers/addFacultyPref');
const { academicDetailsInputModel } = require('../models/academicDetailsModel');
const { universityPreferenceInputModel } = require('../models/universityPreferenceModel');
const { competitiveExamInputModel } = require('../models/competitiveExamModel');
const { facultyPreferenceInputModel } = require('../models/facultyPreferenceModel');

exports.lorRequest = {
    type: GraphQLString,
    args: {
        userId: { type: GraphQLInt },
        lorRequestInfo: { type: lorRequestInputModel },
        academicDetails: { type: GraphQLList(academicDetailsInputModel) },
        universityPreferenceList: { type: GraphQLList(universityPreferenceInputModel) },
        facultyPreferenceList: { type: GraphQLList(facultyPreferenceInputModel) },
        competitiveExamDetails: { type: GraphQLList(competitiveExamInputModel) },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers)) {
                if (args.lorRequestInfo) {
                    await createLORRequest(args.userId, args.lorRequestInfo); 
                }
                if (args.academicDetails) {
                    args.academicDetails.forEach(async (detail) => {
                        try {
                            await addAcademicDetails(args.userId, detail)
                        } catch (err) {
                            console.log(err);
                            throw err;
                        }
                    });
                }
                if (args.universityPreferenceList) {
                    args.universityPreferenceList.forEach(async (detail) => { 
                        try {
                            await addUniPref(args.userId, detail)
                        } catch (err) {
                            console.log(err);
                            throw err;
                        }
                    });
                }
                if (args.facultyPreferenceList) {
                    args.facultyPreferenceList.forEach(async (detail) => { 
                        try {
                            await addFacultyPref(args.userId, detail)
                        } catch (err) {
                            console.log(err);
                            throw err;
                        }
                    });
                }
                if (args.competitiveExamDetails) {
                    args.competitiveExamDetails.forEach(async (detail) => {
                        try {
                            await addCompExamDetails(args.userId, detail)
                        } catch (err) {
                            console.log(err);
                            throw err;
                        }
                    });
                }
                return "LOR request executed successfully";
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
const { GraphQLString, GraphQLInt } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { wholeLORRequest } = require('../models/lorRequestModel');
const { getStuLORRequest } = require('../resolvers/getStuLORRequest');
const { getFacultyPref } = require('../resolvers/getFacultyPref');
const { getCompExamDetails } = require('../resolvers/getCompExamDetails');
const { getUniPref } = require('../resolvers/getUniPref');
const { getAcadDetails } = require('../resolvers/getAcadDetails');

exports.getStuLORRequest = {
    type: wholeLORRequest,
    args: {
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                const lorRequest = await getStuLORRequest(args.user_id);
                const facultyPref = await getFacultyPref(args.user_id);
                const acadDetails = await getAcadDetails(args.user_id);
                const compExamDetails = await getCompExamDetails(args.user_id);
                const uniPref = await getUniPref(args.user_id);

                return {
                    lor_request: lorRequest,
                    faculty_pref: facultyPref,
                    acad_details: acadDetails,
                    comp_exam_details: compExamDetails,
                    uni_pref: uniPref
                };
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
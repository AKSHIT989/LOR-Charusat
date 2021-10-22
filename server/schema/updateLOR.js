const { GraphQLInt, GraphQLString } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { changesInLorRequest, changesInPersonalDetails, changesInAcadDetails, changesInCompExamDetails, changesInUniPref, changesInFacultyPref } = require('../models/updateLORModels');
const { updateLORRequest } = require('../resolvers/updateLORRequest');

exports.updateLOR = {
    type: GraphQLString,
    args: {
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        lorRequest: { type: changesInLorRequest },
        personalDetails: { type: changesInPersonalDetails },
        academicDetails: { type: changesInAcadDetails },
        competitiveExamDetails: { type: changesInCompExamDetails },
        universityPreference: { type: changesInUniPref },
        facultyPreference: { type: changesInFacultyPref },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                await updateLORRequest(args.user_id, args.lorRequest, args.personalDetails, args.academicDetails, args.competitiveExamDetails, args.universityPreference, args.facultyPreference);
                return "Records Updated Successfully";
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
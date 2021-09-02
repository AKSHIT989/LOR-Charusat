const { GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { stuLORDraftStatusModel } = require('../models/stuLORDraftStatusModel');
const { getStuLORDraftStatus } = require('../resolvers/getStuLORDraftStatus');

exports.getStuLORDraftStatus = {
    type: GraphQLList(stuLORDraftStatusModel),
    args: {
        email: { type: GraphQLString },
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                return await getStuLORDraftStatus(args.user_id);
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
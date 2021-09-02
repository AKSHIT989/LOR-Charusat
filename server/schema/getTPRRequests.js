const { GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { tprRequestsModel } = require('../models/tprRequest');
const { getTPRRequests } = require('../resolvers/getTPRRequests');

exports.getTPRRequests = {
    type: GraphQLList(tprRequestsModel),
    args: {
        email: { type: GraphQLString },
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                return await getTPRRequests(args.email);
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
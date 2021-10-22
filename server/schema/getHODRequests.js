const { GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { hodRequestsModel } = require('../models/hodRequest');
const { getHODRequests } = require('../resolvers/getHODRequests');

exports.getHODRequests = {
    type: GraphQLList(hodRequestsModel),
    args: {
        email: { type: GraphQLString },
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                return await getHODRequests(args.email);
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
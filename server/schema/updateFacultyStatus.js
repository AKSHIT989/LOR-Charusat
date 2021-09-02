const { GraphQLInt, GraphQLBoolean, GraphQLString } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { updateFacultyStatus } = require('../resolvers/updateFacultyStatus');

exports.updateFacultyStatus = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        approved: { type: GraphQLBoolean },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                return await updateFacultyStatus(args.id, args.approved);
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
const { GraphQLInt, GraphQLString } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { updateFacultyStatus } = require('../resolvers/updateFacultyStatus');
const { updatePassword } = require('../resolvers/updatePassword');

exports.resetPassword = {
    type: GraphQLString,
    args: {
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                return await updatePassword(args.email, args.password);
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
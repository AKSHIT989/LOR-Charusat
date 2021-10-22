const { GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { updateFacultyStatus } = require('../resolvers/updateFacultyStatus');

exports.updateFacultyStatus = {
    type: GraphQLString,
    args: {
        ids: { type: new GraphQLList(GraphQLInt) },
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        approved: { type: GraphQLBoolean },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                await updateFacultyStatus(args.ids, args.approved);
                return "Faculty status updated successfully";
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
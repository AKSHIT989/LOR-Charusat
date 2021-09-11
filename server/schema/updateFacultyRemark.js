const { GraphQLInt, GraphQLString } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { updateFacultyRemark } = require('../resolvers/updateFacultyRemark');

exports.updateFacultyRemark = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        remark: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                return await updateFacultyRemark(args.id, args.remark);
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
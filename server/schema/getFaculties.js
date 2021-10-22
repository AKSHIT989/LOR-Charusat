const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { getFacultiesModel } = require('../models/getFaculties');
const { getFaculties } = require('../resolvers/getFaculties');

exports.getFaculties = {
    type: GraphQLList(getFacultiesModel),
    args: {
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        institute: { type: GraphQLString },
        department: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            if (authenticateToken(headers, args.user_id, args.user_type)) {
                return await getFaculties(args.institute, args.department);
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
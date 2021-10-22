const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { getDepartments } = require('../resolvers/getDepartments');

exports.getInstiDepartments = {
    type: GraphQLList(GraphQLString),
    args: {
        institute: { type: GraphQLString }
    },
    async resolve(parent, args, { headers }) {
        try {
            return await getDepartments(args.institute);
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
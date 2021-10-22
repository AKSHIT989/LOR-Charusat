const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { getInstitutes } = require('../resolvers/getInstitutes');

exports.getAllInstitutes = {
    type: GraphQLList(GraphQLString),
    args: {},
    async resolve(parent, args, { headers }) {
        try {
            return await getInstitutes();
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
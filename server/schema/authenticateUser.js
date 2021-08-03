const { GraphQLString, GraphQLBoolean } = require('graphql');
const { authenticateUser } = require('../resolvers/authenticateUser');

exports.authenticateUser = {
    type: GraphQLBoolean,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parent, args) {
        return authenticateUser(args.email, args.password);
    }
};
const { GraphQLString } = require('graphql');
const { authenticateModel } = require('../models/authenticateModel');
const { authenticateUser } = require('../resolvers/authenticateUser');

exports.authenticateUser = {
    type: authenticateModel,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parent, args, { headers }) {
        return authenticateUser(args.email, args.password);
    }
};
const { GraphQLString } = require('graphql');
const { authenticateModel } = require('../models/authenticateModel');
const { authenticateUser } = require('../resolvers/authenticateUser');

exports.authenticateUser = {
    type: authenticateModel,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        return await authenticateUser(args.email, args.password);
    }
};
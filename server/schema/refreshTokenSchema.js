const { GraphQLString } = require('graphql');
const { refreshTokenModel } = require('../models/refreshTokenModel');
const { refreshToken } = require('../middleware/authenticate');

exports.refreshToken = {
    type: refreshTokenModel,
    args: {
        token: { type: GraphQLString },
        email: { type: GraphQLString },
    },
    resolve(parent, args, { headers }) {
        return refreshToken(args.email, args.token);
    }
};
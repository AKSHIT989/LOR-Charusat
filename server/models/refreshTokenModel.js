const { GraphQLString, GraphQLObjectType, GraphQLBoolean } = require('graphql');

exports.refreshTokenModel = new GraphQLObjectType({
    name: 'refreshToken',
    fields: () => ({
        access_token: { type: GraphQLString },
        authenticated: { type: GraphQLBoolean },
    }),
});
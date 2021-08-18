const { GraphQLString, GraphQLObjectType, GraphQLBoolean } = require('graphql');

exports.refreshTokenModel = new GraphQLObjectType({
    name: 'refreshToken',
    fields: () => ({
        accessToken: { type: GraphQLString },
        authenticated: { type: GraphQLBoolean },
    }),
});
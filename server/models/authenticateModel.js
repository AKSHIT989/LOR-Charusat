const { GraphQLString, GraphQLObjectType, GraphQLBoolean } = require('graphql');

exports.authenticateModel = new GraphQLObjectType({
    name: 'authenticate',
    fields: () => ({
        accessToken: { type: GraphQLString },
        refreshToken: { type: GraphQLString },
        authenticated: { type: GraphQLBoolean },
    }),
});
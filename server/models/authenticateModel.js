const { GraphQLString, GraphQLObjectType, GraphQLBoolean, GraphQLInt } = require('graphql');

exports.authenticateModel = new GraphQLObjectType({
    name: 'authenticate',
    fields: () => ({
        access_token: { type: GraphQLString },
        refresh_token: { type: GraphQLString },
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        email: { type: GraphQLString },
        authenticated: { type: GraphQLBoolean },
    }),
});
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { authenticateUser } = require('./authenticateUser');
const { lorRequest } = require('./lorRequest');
const { refreshToken } = require('./refreshTokenSchema');
const { addUser } = require('./addUser');

const rootQuery = new GraphQLObjectType({
    name: 'root',
    fields: {
        authenticateUser,
        refreshToken,
    }
});

const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
        addUser,
        lorRequest,
    }
});

exports.schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });
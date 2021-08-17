const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { authenticateUser } = require('./authenticateUser');
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
    }
});

exports.schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });
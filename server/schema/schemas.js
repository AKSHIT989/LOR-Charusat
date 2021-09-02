const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { authenticateUser } = require('./authenticateUser');
const { updateFacultyStatus } = require('./updateFacultyStatus');
const { updateFacultyRemark } = require('./updateFacultyRemark');
const { getFacultyRequests } = require('./getFacultyRequests');
const { getTPRRequests } = require('./getTPRRequests');
const { getHODRequests } = require('./getHODRequests');
const { getStuLORRequest } = require('./getStuLORRequest');
const { getStuLORDraftStatus } = require('./getStuLORDraftStatus');
const { lorRequest } = require('./lorRequest');
const { refreshToken } = require('./refreshTokenSchema');
const { addUser } = require('./addUser');

const rootQuery = new GraphQLObjectType({
    name: 'root',
    fields: {
        authenticateUser,
        refreshToken,
        updateFacultyStatus,
        updateFacultyRemark,
        getFacultyRequests,
        getTPRRequests,
        getHODRequests,
        getStuLORRequest,
        getStuLORDraftStatus
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
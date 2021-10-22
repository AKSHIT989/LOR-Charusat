const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { authenticateUser } = require('./authenticateUser');
const { updateFacultyStatus } = require('./updateFacultyStatus');
const { updateFacultyRemark } = require('./updateFacultyRemark');
const { updateLOR } = require('./updateLOR');
const { getAllInstitutes } = require('./getAllInstitutes');
const { getInstiDepartments } = require('./getInstiDepartments');
const { getFaculties } = require('./getFaculties');
const { getFacultiesHod } = require('./getFacultiesHod');
const { getFacultyRequests } = require('./getFacultyRequests');
const { getTPRRequests } = require('./getTPRRequests');
const { getHODRequests } = require('./getHODRequests');
const { getStuLORRequest } = require('./getStuLORRequest');
const { getStuLORDraftStatus } = require('./getStuLORDraftStatus');
const { getOtp } = require('./getOtp');
const { resetPassword } = require('./resetPassword');
const { registerUser } = require('./registerUser');
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
        getStuLORDraftStatus,
        getFaculties,
        getFacultiesHod,
        getAllInstitutes,
        getInstiDepartments,
        getOtp,
        resetPassword
    }
});

const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
        addUser,
        registerUser,
        lorRequest,
        updateLOR,
    }
});

exports.schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });
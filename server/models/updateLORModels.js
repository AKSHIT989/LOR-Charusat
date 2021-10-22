const { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { academicDetailsInputModel } = require('./academicDetailsModel');
const { competitiveExamInputModel } = require('./competitiveExamModel');
const { facultyPreferenceInputModel } = require('./facultyPreferenceModel');
const { lorRequestInputModel } = require('./lorRequestModel');
const { personalDetailsInputModel } = require('./personalDetailsModel');
const { ScalarObject } = require('./ScalarObject');
const { universityPreferenceInputModel } = require('./universityPreferenceModel');

exports.changesInLorRequest = new GraphQLInputObjectType({
    name: 'changeInLorRequest',
    fields: () => ({
        update: { type: lorRequestInputModel }
    }),
});

exports.changesInPersonalDetails = new GraphQLInputObjectType({
    name: 'changeInPersonalDetails',
    fields: () => ({
        update: { type: personalDetailsInputModel }
    }),
});

exports.changesInAcadDetails = new GraphQLInputObjectType({
    name: 'changeInAcadDetails',
    fields: () => ({
        update: { type: ScalarObject }
    }),
});

exports.changesInCompExamDetails = new GraphQLInputObjectType({
    name: 'changeInCompExamDetails',
    fields: () => ({
        add: { type: GraphQLList(competitiveExamInputModel) },
        delete: { type: GraphQLList(GraphQLInt) },
        update: { type: ScalarObject }
    }),
});

exports.changesInUniPref = new GraphQLInputObjectType({
    name: 'changeInUniPref',
    fields: () => ({
        add: { type: GraphQLList(universityPreferenceInputModel) },
        delete: { type: GraphQLList(GraphQLInt) },
        update: { type: ScalarObject }
    }),
});

exports.changesInFacultyPref = new GraphQLInputObjectType({
    name: 'changeInFacultyPref',
    fields: () => ({
        add: { type: GraphQLList(facultyPreferenceInputModel) },
        delete: { type: GraphQLList(GraphQLInt) },
        update: { type: ScalarObject }
    }),
});
const { GraphQLString, GraphQLObjectType, GraphQLList } = require("graphql");
const { getFacultiesModel } = require("./getFaculties");

exports.getFacultiesHODModel = new GraphQLObjectType({
    name: "facultyHodModel",
    fields: () => ({
        faculties: { type: GraphQLList(getFacultiesModel) },
        hod: { type: hodModel },
    }),
});

const hodModel = new GraphQLObjectType({
    name: "hodModel",
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
    }),
});

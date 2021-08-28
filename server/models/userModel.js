const { GraphQLInputObjectType, GraphQLString } = require('graphql');

exports.userModel = new GraphQLInputObjectType({
    name: 'user',
    fields: () => ({
        charusatId: { type: GraphQLString },
        userType: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        counsellor: { type: GraphQLString },
        hod: { type: GraphQLString },
        inst: { type: GraphQLString },
        degree: { type: GraphQLString },
        mobile: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        githubUrl: { type: GraphQLString },
        linkedinUrl: { type: GraphQLString },
    }),
});
const { GraphQLInputObjectType, GraphQLString } = require('graphql');

exports.userModel = new GraphQLInputObjectType({
    name: 'user',
    fields: () => ({
        charusat_id: { type: GraphQLString },
        user_type: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        counsellor: { type: GraphQLString },
        hod: { type: GraphQLString },
        institute: { type: GraphQLString },
        department: { type: GraphQLString },
        mobile: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        github_url: { type: GraphQLString },
        linkedin_url: { type: GraphQLString },
        lor_status: { type: GraphQLString },
    }),
});
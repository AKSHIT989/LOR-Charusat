const { GraphQLInputObjectType, GraphQLString } = require('graphql');

exports.userModel = new GraphQLInputObjectType({
    name: 'user',
    fields: () => ({
        charusat_id: { type: GraphQLString },
        user_type: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        inst: { type: GraphQLString },
        degree: { type: GraphQLString },
        mobile: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        github_url: { type: GraphQLString },
        linkedin_url: { type: GraphQLString },
    }),
});
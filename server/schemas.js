const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInputObjectType } = require('graphql');
const { authenticateUser, addUser } = require('./operations');

const userSchema = new GraphQLInputObjectType({
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

const rootQuery = new GraphQLObjectType({
    name: 'root',
    fields: {
        authenticateUser: {
            type: GraphQLBoolean,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                return authenticateUser(args.email, args.password);
            }
        },
    }
});

const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
        addUser: {
            type: GraphQLString,
            args: {
                userInfo: { type: userSchema },
            },
            resolve(parent, args) {
                return addUser(args.userInfo);
            }
        },
    }
});

exports.schema = new GraphQLSchema({query: rootQuery, mutation: rootMutation});
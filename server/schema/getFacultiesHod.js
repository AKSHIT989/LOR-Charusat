const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { getFacultiesHODModel } = require('../models/getFacultiesHODModel');
const { getFaculties } = require('../resolvers/getFaculties');
const { getHod } = require('../resolvers/getHod');

exports.getFacultiesHod = {
    type: getFacultiesHODModel,
    args: {
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        institute: { type: GraphQLString },
        department: { type: GraphQLString },
    },
    async resolve(parent, args, { headers }) {
        try {
            const faculties = await getFaculties(args.institute, args.department);
            const hod = await getHod(args.institute, args.department);
            return { faculties, hod };
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
const { GraphQLString } = require('graphql');
const { userModel } = require("../models/userModel");
const { addUser } = require('../resolvers/addUser');

exports.addUser = {
    type: GraphQLString,
    args: {
        userInfo: { type: userModel },
    },
    async resolve(parent, args) {
        return await addUser(args.userInfo);
    }
};
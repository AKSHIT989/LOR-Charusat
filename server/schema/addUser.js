const { GraphQLString } = require('graphql');
const { userModel } = require("../models/userModel");
const { addUser } = require('../resolvers/addUser');

exports.addUser = {
    type: GraphQLString,
    args: {
        userInfo: { type: userModel },
    },
    resolve(parent, args) {
        return addUser(args.userInfo);
    }
};
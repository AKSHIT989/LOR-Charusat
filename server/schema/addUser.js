const { GraphQLString, GraphQLInt } = require('graphql');
const { authenticateToken } = require('../middleware/authenticate');
const { userModel } = require("../models/userModel");
const { addUser } = require('../resolvers/addUser');
const { sendMail } = require('../utilities/email-service');

exports.addUser = {
    type: GraphQLString,
    args: {
        user_id: { type: GraphQLInt },
        user_type: { type: GraphQLString },
        userInfo: { type: userModel },
    },
    async resolve(parent, args, req) {
        try {
            if (authenticateToken(req.headers, args.user_id, args.user_type)) {
                const messageId = await sendMail(args.userInfo.email, null, args.userInfo.password);
                if (messageId) {
                    return await addUser(args.userInfo);
                }
                return new Error("Can't add user. Please try again");
            } else {
                return new Error("Error 403: Forbidden");
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
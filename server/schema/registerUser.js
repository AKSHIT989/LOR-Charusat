const { GraphQLBoolean, GraphQLString, GraphQLInt } = require('graphql');
const { userModel } = require('../models/userModel');
const { addUser } = require('../resolvers/addUser');
const { otps } = require('../utilities/otpData');

const parseIp = (req) =>
    (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',').shift())
    || (req.socket && req.socket.remoteAddress);

const verifyOtp = (req, email, givenOtp) => {
    const ip = parseIp(req);
    const { otp, time } = otps[`${ip}_${email}`];
    const currentTime = new Date();
    const timeDiff = Math.abs(time - currentTime);
    if (timeDiff < 100000 && givenOtp === otp) { // time diff less than 100s
        delete otps[`${ip}_${email}`];
        return true;
    }
    return false;
}

exports.registerUser = {
    type: GraphQLBoolean,
    args: {
        otp: { type: GraphQLInt },
        userInfo: { type: userModel }
    },
    async resolve(parent, args, req) {
        try {
            if (verifyOtp(req, args.userInfo.email, args.otp)) {
                await addUser(args.userInfo);
                return true;
            }
            return false;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
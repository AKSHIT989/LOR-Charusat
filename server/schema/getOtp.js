const { GraphQLString } = require('graphql');
const { sendMail } = require('../utilities/email-service');
const { otps } = require('../utilities/otpData');

const parseIp = (req) =>
    (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',').shift())
    || (req.socket && req.socket.remoteAddress);

exports.getOtp = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString },
    },
    async resolve(parent, args, req) {
        try {
            const ip = parseIp(req);
            const otp = parseInt(Math.random() * 1000000);
            otps[`${ip}_${args.email}`] = {otp, time: new Date()};
            return await sendMail(args.email, otp, null);
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
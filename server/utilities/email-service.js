const nodemailer = require("nodemailer");

exports.sendMail = async (email, otp, password) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: true,
        }
    });

    let message;
    if (otp) {
        message = `Your otp is: <b>${otp}</b>`;
    } else if (password) {
        message = `Your password is: <b>${password}</b>. <br>Please change your password after logging in`;
    }

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"LOR Charusat" <${testAccount.user}>`, // sender address
        to: `${email}`, // list of receivers
        subject: "LOR Charusat account creation", // Subject line
        html: message, // html body
    });
    
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return info.messageId;
}

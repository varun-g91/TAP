import { configDotenv } from 'dotenv';
import nodemailer from 'nodemailer';
import process from 'process';

const sendEmail = async (email, subject, text) => {
    try {


        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.USERNAME,
                pass: process.env.PASSWORD,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN
            }
        });

        await transporter.sendMail({
            from: process.env.USERNAME,
            to: email,
            subject: subject,
            text: text,
            html: `<div style="font-family: Arial, sans-serif; text-align: center;">
                    <p>Please click the button below to verify your email address:</p>
                    <a href="${text}" style="
                            display: inline-block;
                            padding: 10px 20px;
                            font-size: 16px;
                            color: #fff;
                            background-color: #007bff;
                            text-decoration: none;
                            border-radius: 5px;
                        ">Click here to verify</a>
                </div>
                `,
    });
    console.log('Email sent successfully');
} catch (error) {
    console.log('Email not sent due to an error: ' + error.message);
}
}

export default sendEmail;
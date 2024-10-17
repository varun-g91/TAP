import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const sendEmail = async (contactData) => {
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

        const emailTemplate = `
     <h1>New Contact Submission</h1>
     <p><strong>First Name:</strong> ${contactData.firstName}</p>
     <p><strong>Last Name:</strong> ${contactData.lastName}</p>
     <p><strong>Email:</strong> ${contactData.email}</p>
     <p><strong>Phone:</strong> ${contactData.phoneNumber}</p>
     <p><strong>Organization Type:</strong> ${contactData.organizationType}</p>
     <p><strong>Work Experience:</strong> ${contactData.workExperience}</p>
     <p><strong>Message:</strong> ${contactData.message}</p>
   `;

        let mailOptions = {
            from: process.env.USERNAME,
            to: "varun.g.dsu@gmail.com", // Change to the recipient's email address
            subject: 'New Contact Form Submission',
            text: `Contact details for ${contactData.firstName} ${contactData.lastName}`,
            html: emailTemplate
        };

        let info = await transporter.sendMail(mailOptions);

        console.log('Email sent: %s', info.messageId);
    } catch (error) {
        console.log('Email not sent due to an error: ' + error.message);
    }
}

export default sendEmail;



// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();

// // Function to send email
// const sendContactDetails = async (contactData) => {
//     console.log("sendContactDetails Called");
//     console.log("Contact Details:", contactData);
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             type: 'OAuth2',
//             user: process.env.USERNAME, // Email address
//             clientId: process.env.CLIENT_ID, // Your client ID
//             clientSecret: process.env.CLIENT_SECRET, // Your client secret
//             refreshToken: process.env.REFRESH_TOKEN, // Your refresh token
//             // Remove pass field
//         }
//     });

//     const emailTemplate = `
//     <h1>New Contact Submission</h1>
//     <p><strong>First Name:</strong> ${contactData.firstName}</p>
//     <p><strong>Last Name:</strong> ${contactData.lastName}</p>
//     <p><strong>Email:</strong> ${contactData.email}</p>
//     <p><strong>Phone:</strong> ${contactData.phoneNumber}</p>
//     <p><strong>Organization Type:</strong> ${contactData.organizationType}</p>
//     <p><strong>Work Experience:</strong> ${contactData.workExperience}</p>
//     <p><strong>Message:</strong> ${contactData.message}</p>
//   `;

//     let mailOptions = {
//         from: process.env.USERNAME,
//         to: "varun.g.dsu@gmail.com", // Change to the recipient's email address
//         subject: 'New Contact Form Submission',
//         text: `Contact details for ${contactData.firstName} ${contactData.lastName}`,
//         html: emailTemplate
//     };

//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: %s', info.messageId);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// export default sendContactDetails;

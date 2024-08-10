import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { validateLogin } from '../validation/loginValidation.js';
import jwt from 'jsonwebtoken'; 
import sendEmail from '../utils/sendEmail.js';
import Token from '../models/token.js';
import crypto from 'crypto'


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { identifier, password } = req.body;

        // Validate the login input
        validateLogin(identifier, password);

        // Find the user by either email or username
        const user = await User.findOne({
            $or: [{ email: identifier }, { userName: identifier }],
        });

        // Check if the user exists and the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ status: 'error', message: 'Invalid Password' });
        }

        if (!user.verified) {
            let token = await Token.findOne({ userId: user._id });
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(16).toString('hex'),
                }).save();

                // Ensure the email variable is correctly assigned
                const email = user.email;

                // Construct the URL
                const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;

                await sendEmail(email, 'Verify your email', `Click the link below to verify your email: ${url}`);
            }

            return res.status(401).json({ status: 'error', message: 'Email not verified. Check your inbox for the verification link.' });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            {
                id: user._id,
                userName: user.userName,
                email: user.email,
            },
            process.env.SECRET_KEY,
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        return res.status(200).json({
            status: 'success',
            message: 'Login successful',
            token: jwtToken,
        });
    } catch (error) {
        console.error('Error during login process:', error.message);
        return res.status(500).json({ status: 'error', message: error.message });
    }
});

export default router;

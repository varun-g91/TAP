import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import { validateUsername } from '../validation/usernameValidator.js';
import { validateEmail } from '../validation/emailValidator.js';
import { validatePassword } from '../validation/passwordValidator.js';
import express from 'express';
import sendEmail from '../utils/sendEmail.js';
import Token from '../models/token.js';
import crypto from 'crypto'

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, userName, email, password, confirmPassword } = req.body;

        //validate credentials
        validateUsername(userName);
        validateEmail(email);
        validatePassword(password);

        const existingUserEmail = await User.findOne({ email });
        if (existingUserEmail) {
            throw new Error(`User ${existingUserEmail} already exists`);
        }

        const existingUserName = await User.findOne({ userName });
        if (existingUserName) {
            throw new Error(`Username ${existingUserName} already exists`);
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let user = await new User({
            name,
            userName,
            email,
            password: hashedPassword,
        }).save();

        const verificationToken = await new Token({
            userId: user._id,
            token: crypto.randomBytes(16).toString('hex'),
        }).save();

        const url = `${process.env.BASE_URL}/users/${user._id}/verify/${verificationToken.token}`;
        console.log(url);

        await sendEmail(email, 'Verify your email', url);

        res.status(201).send({ 
            status: 'success',
            message: 'An email has been sent to the provided email address, please verify your email address' 
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router
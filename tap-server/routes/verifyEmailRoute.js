import Token from "../models/token.js";
import User from "../models/userModel.js";
import express from "express";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const token = await Token.findOne({
            userId: req.params.id,
            token: req.params.token,
            // Ensure token is not expired
            createdAt: { $gt: Date.now() - 3600000 } // 1 hour expiration
        });

        if (!token) {
            return res.status(400).send({ message: 'Invalid or expired link' });
        }

        const user = await User.findOne({ _id: req.params.id });

        if (!user || user.verified) {
            return res.status(400).send({ message: 'Invalid link or user already verified' });
        }

        user.verified = true;
        await user.save();

        await token.remove();
        console.log('Token removed successfully after verification.');

        return res.status(200).send({ message: 'Email verified successfully' });

    } catch (error) {
        return res.status(500).send({ message: 'Internal server error: ' + error.message });
    }
});

export default router;
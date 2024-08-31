import verifyEmail from "../controllers/emailVerificationController.js";
import express from "express";

const router = express.Router();

router.get('/users/:id/verify/:token', verifyEmail);

export default router;
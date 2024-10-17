import express from "express";
import { signup, login, logout, getAuthenticatedUser } from "../controllers/auth.controller.js";
import submitForm from "../controllers/formSubmissionController.js";
import verifyEmail from "../controllers/emailVerificationController.js";
import { validateEnquirer } from "../middleware/validators.js";

const router = express.Router();

//route to submit form
// router.post('/enquirer', validateEnquirer, submitForm);
router.post('/enquirer', validateEnquirer, (req, res, next) => {
    console.log("Validation passed, moving to controller...");
    next();
}, submitForm);

//route to register user
router.post('/register', signup);
//route to login user
router.post('/login', login);
//route to logout user
router.post('/logout', logout);
//route to verify user email
router.get('/users/:id/verify/:token', verifyEmail);

export default router;

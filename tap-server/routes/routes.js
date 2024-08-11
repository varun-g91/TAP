import express from "express";
import loginRoute from './loginRoute.js';
import registrationRoute from './registrationRoute.js';
import submitFormRoute from './submitFormRoute.js';
import verifyEmailRoute from './verifyEmailRoute.js';

const router = express.Router();

//route to submit form
router.use('/enquirer', submitFormRoute);
//route to register user
router.use('/register', registrationRoute);
//route to login user
router.use('/login', loginRoute); 
//route to verify user email
router.use('/users/:id/verify/:token', verifyEmailRoute);

export default router;

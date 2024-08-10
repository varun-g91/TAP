import express from "express";
import loginRoute from './loginRoute.js';
import registrationRoute from './registrationRoute.js';
import submitFormRoute from './submitFormRoute.js';

const router = express.Router();

//route to submit form
router.use('/enquirer', submitFormRoute);
//route to register user
router.use('/register', registrationRoute);
//route to login user
router.use('/login', loginRoute); 

export default router;

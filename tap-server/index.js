import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import corsConfig from './middleware/corsConfig.js';
import cookieParser from "cookie-parser";
import process from 'process';
import dotenv from 'dotenv';
import connectToDB from './db/connectToDb.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse form data
app.use(cookieParser());

//CORS configuration
app.use(cors(corsConfig));

//Routes
app.use('/api/tap-server', authRoutes);

// Error handling middleware
app.use(errorHandler);

//Database connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectToDB();
});

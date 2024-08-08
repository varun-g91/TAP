import express from 'express';
import mongoose from 'mongoose';
import { PORT, conString } from './config.js';
import cors from 'cors';
import routes from './routes/routes.js';
const app = express();

//middleware for parsing request body
app.use(express.json());

//CORS configuration
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173']

const corsConfig = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },

    operationSuccessStatus: 200
};

app.use(cors(corsConfig));

app.use('/api/tap-server', routes);

//Database connection
mongoose
    .connect(conString)
    .then((result) => {
        console.log('App connected to Database: ');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

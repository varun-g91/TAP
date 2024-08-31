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

export default corsConfig;
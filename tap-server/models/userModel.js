import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        match: [/^[a-zA-Z]+$/, 'Name can only contain alphabets']
    },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        match: [/^[a-zA-Z0-9_]{6,}$/, 'Username must be at least 6 characters and contain only alphanumeric characters and underscores']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Invalid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    verified: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userSchema);

export default User; 
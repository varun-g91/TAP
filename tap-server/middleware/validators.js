import { body, validationResult } from "express-validator";

export const validateEnquirer = [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("phoneNumber").notEmpty().withMessage("Phone number is required"),
    body("organizationType").notEmpty().withMessage("Organization type is required"),
    body("workExperience").notEmpty().withMessage("Work experience is required"),
    body("message").notEmpty().withMessage("Message is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Error(errors.join)
        }
        next();
    },
];
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email');
    }
}

export function validateLogin(identifier, password) {
    if (!identifier || !password) {
        throw new Error('Please provide both identifier and password');
    }

    // Additional validation can be added here, such as checking the format of the email, etc.
    if (typeof identifier !== 'string' || typeof password !== 'string') {
        throw new Error('Invalid input type');
    }
}


export const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|_<>]/.test(password);

    if (password.length < minLength || !hasUpperCase || !hasNumber || !hasSpecialChar) {
        throw new Error('Please choose a stonger password');
    }

}

export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
    if (!usernameRegex.test(username)) {
        throw new Error('Invalid username');
    }
}
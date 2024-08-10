// middlewares/validateEnquirer.js
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



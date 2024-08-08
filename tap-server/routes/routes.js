import express from "express";
import { Enquirer } from "../models/enquirerModel.js";

const router = express.Router();

//route to submit form
router.post('/' , async (req, res) => {
    try {
        if (!req.body.firstName ||
            !req.body.lastName ||
            !req.body.email ||
            !req.body.phoneNumber ||
            !req.body.organizationType ||
            !req.body.workExperience ||
            !req.body.message
        ) {
            return res.status(400).send({
                message: "Please fill all the required fields" 
            });
        }

        const newEnquirer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            organizationType: req.body.organizationType,
            workExperience: req.body.workExperience,
            message: req.body.message
        };

        const enquirer = await Enquirer.create(newEnquirer);

        return res.status(200).send(enquirer);

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

export default router;
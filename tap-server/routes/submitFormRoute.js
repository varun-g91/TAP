import express from 'express';
import { validateEnquirer } from '../validation/formValidator.js';
import { Enquirer } from '../models/enquirerModel.js';
const router = express.Router();


router.post('/', validateEnquirer, async (req, res) => {
    try {
        // Since validateEnquirer middleware checks the input, 
        // you don't need to manually check the fields again here.

        const newEnquirer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            organizationType: req.body.organizationType,
            workExperience: req.body.workExperience,
            message: req.body.message
        };

        await Enquirer.create(newEnquirer);

        return res.status(200).send({status: 'Success', message: 'enquiry sent successfully'});

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
});

export default router;

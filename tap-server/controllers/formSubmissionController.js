import express from 'express';
import { validateEnquirer } from '../middleware/validation/formValidator.js';
import { Enquirer } from '../models/enquirerModel.js';

const submitForm = async (req, res) => {
    try {
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

        return res.status(200).send({ status: 'Success', message: 'enquiry sent successfully' });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
}

export default submitForm;
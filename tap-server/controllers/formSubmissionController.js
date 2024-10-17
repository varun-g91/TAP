import { Enquirer } from "../models/enquirerModel.js";
import sendContactDetails from "../utils/exportContactDetails.js";

const submitForm = async (req, res) => {
    console.log("Form Submission Controller Called");
    try {
        console.log("Form Data:", req.body);
        const newEnquirer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            organizationType: req.body.organizationType,
            workExperience: req.body.workExperience,
            message: req.body.message
        };

        // Check if email or phone number already exists
        const emailExists = await Enquirer.findOne({ email: newEnquirer.email });
        const phoneNumberExists = await Enquirer.findOne({ phoneNumber: newEnquirer.phoneNumber });

        if (emailExists) {
            return res.status(400).send({ message: 'Email already exists' });
        }
        if (phoneNumberExists) {
            return res.status(400).send({ message: 'Phone number already exists' });
        }

        // Create the new enquirer if no duplicates found
        await Enquirer.create(newEnquirer);

        // Send contact details (assuming this is a utility function that handles email sending)
        sendContactDetails(newEnquirer);

        console.log('Enquiry sent successfully');

        return res.status(200).send({ status: 'Success', message: 'Enquiry sent successfully' });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
}

export default submitForm
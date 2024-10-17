import mongoose from "mongoose";

const phoneNumRegex = /^\+?[1-9]\d{1,14}$/;

const enquirerSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return phoneNumRegex.test(v);
                },
                message: props => `${props.value} is not a valid phone number!`
            }
        },

        organizationType: {
            type: String,
            required: true,
            enum: [
                "Corporate",
                "Non-Profit Organization",
                "Entrepreneur",
                "Government",
                "Academia"
            ],
        },

        workExperience: {
            type: String,
            required: true,
            enum: [
                '1-5 Years',
                '5-10 Years',
                '10-15 Years',
                '15-20 Years',
                'CXO level'
            ],
        },

        message: {
            type: String,
            required: true
        },        
    },
    {
        timestamps: true,
    }
);

export const Enquirer = mongoose.model("Enquirer", enquirerSchema);
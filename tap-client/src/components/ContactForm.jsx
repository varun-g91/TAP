import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import CustomDropdown from "./CustomDropdown";
const ContactForm = ({ closePopup }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        organizationType: "",
        workExperience: "",
        message: "",
    });

    const toggleOrganizationType = (option) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            organizationType: option,
        }));
    };


    const organizationTypes = [
        "Corporate",
        "Non-Profit Organization",
        "Entrepreneur",
        "Government",
        "Academia",
    ];

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validation logic
        const updatedErrors = { ...errors };
        const validationError = validateField(name, value);
        if (validationError) {
            updatedErrors[name] = validationError;
        } else {
            delete updatedErrors[name];
        }
        setErrors(updatedErrors);
    };

    const handleFocus = (e) => {
        e.target.classList.add("focused");
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            e.target.classList.remove("focused");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        setIsSubmitted(true);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form Data:", formData);
            axios
                .post("http://localhost:5555/api/tap-server/enquirer", formData)
                .then((response) => {
                    console.log("Form submitted:", response.data);
                    closePopup();
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                });
        }
    };

    const validateField = (name, value) => {
        switch (name) {
            case "firstName":
                if (!value) return "First name is required";
                break;
            case "lastName":
                if (!value) return "Last name is required";
                break;
            case "email":
                if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                    return "Valid email is required";
                break;
            case "phoneNumber":
                if (!value || !/^\d{10}$/.test(value))
                    return "Valid phone number is required";
                break;
            case "organizationType":
                if (!value) return "Organization type is required";
                break;
            case "workExperience":
                if (!value) return "Work experience is required";
                break;
            case "message":
                if (!value) return "Message is required";
                break;
            default:
                return null;
        }
        return null;
    };

    const validateForm = (data) => {
        const errors = {};
        Object.keys(data).forEach((key) => {
            const error = validateField(key, data[key]);
            if (error) errors[key] = error;
        });
        return errors;
    };

    return (
        <div
            className="overlay"
            onClick={(e) => e.target.className === "overlay" && closePopup()}
        >
            <div className="form-container">
                <button className="close-button" onClick={closePopup}>
                    &times;
                </button>
                <h2 className="form-heading">Tell us your needs!</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label
                                className={`form-label ${
                                    formData.firstName ? "active" : ""
                                }`}
                            >
                                First Name*
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={`form-input ${
                                    errors.firstName ? "input-error" : ""
                                }`}
                                style={{ height: "50px", marginBottom: "20px" }}
                            />
                            <span className="error-message">
                                {errors.firstName || "\u00A0"}
                            </span>
                        </div>
                        <div className="form-group">
                            <label
                                className={`form-label ${
                                    formData.lastName ? "active" : ""
                                }`}
                            >
                                Last Name*
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={`form-input ${
                                    errors.lastName ? "input-error" : ""
                                }`}
                                style={{ height: "50px", marginBottom: "20px" }}
                            />
                            <span className="error-message">
                                {errors.lastName || "\u00A0"}
                            </span>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group ">
                            <div className="form-label">
                                <label htmlFor="email">Email*</label>
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.ema9il}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={`form-input ${
                                    errors.email ? "input-error" : ""
                                }`}
                                style={{ height: "50px", marginBottom: "20px" }}
                            />
                            <span className="error-message">
                                {errors.email || "\u00A0"}
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number*</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={`form-input ${
                                    errors.phoneNumber ? "input-error" : ""
                                }`}
                                style={{ height: "50px", marginBottom: "20px" }}
                            />
                            <span className="error-message">
                                {errors.phoneNumber || "\u00A0"}
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "start   ",
                            maxWidth: "fit-content",
                            maxHeight: "48px",
                            marginTop: "0px",
                            marginBottom: "60px",
                        }}
                    >
                        <CustomDropdown
                            options={organizationTypes}
                            toggleOrganizationType={toggleOrganizationType}
                            error={errors.organisationType}
                        />
                        <span 
                            className="error-message" 
                            style={{ position: "relative", top: "50px", right: "5rem" }}
                        >
                            {errors.organizationType || "\u00A0"}
                        </span>
                    </div>

                    <div
                        className="form-group"
                        id="work-experience"
                        style={{ marginBottom: "20px" }}
                    >
                        <label className="form-label">Work Experience*</label>
                        <div className="experience-options">
                            {[
                                "1-5 Years",
                                "5-10 Years",
                                "10-15 Years",
                                "15-20 Years",
                                "CXO level",
                            ].map((exp) => (
                                <p key={exp} className="experience-label">
                                    <input
                                        type="radio"
                                        name="workExperience"
                                        value={exp}
                                        className="experience-radio"
                                        checked={
                                            formData.workExperience === exp
                                        }
                                        onChange={handleChange}
                                    />
                                    {exp}
                                </p>
                            ))}
                        </div>
                        <span
                            className="error-message"
                            style={{ position: "relative", top: "4px" }}
                        >
                            {errors.workExperience || "\u00A0"}
                        </span>
                    </div>
                    <div
                        className="form-group message"
                        style={{
                            display: "flex",
                            maxHeight: "fit-content",
                            flexDirection: "column",
                        }}
                    >
                        <label htmlFor="message">Message*</label>
                        <input
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={`form-input ${
                                errors.message ? "input-error" : ""
                            }`}
                            style={{
                                marginTop: "30px", 
                            }}
                            rows="4"
                        />
                        <span
                            className="error-message"
                            style={{
                                position: "relative",
                                top: "0px",
                            }}
                        >
                            {errors.message || "\u00A0"}
                        </span>
                    </div>
                    <div className="button-group">
                        <div></div>
                        <div className="submit-button">
                            <button type="submit">
                                <span className="send-inquiry">
                                    Send Inquiry
                                </span>
                            </button>
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

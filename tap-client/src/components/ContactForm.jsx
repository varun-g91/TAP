import React, { useState } from "react";
import axios from "axios";

const ContactForm = ({ closePopup, showModal }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        organizationType: "",
        workExperience: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form Data:", formData);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                organizationType: "",
                workExperience: "",
                message: "",
            });
            // Make API call to submit form data
            axios
                .post("http://localhost:5555/api/tap-server/enquirer", formData)
                .then(() => {
                    console.log("Form submitted successfully!");
                    closePopup();
                    console.log("Calling showModal with success message");
                    showModal("We will get back to you shortly.");
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                    console.log("Calling showModal with error message");
                    showModal(
                        "There was an error submitting your form. Please try again later."
                    );
                });
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.firstName) errors.firstName = "First name is required";
        if (!data.lastName) errors.lastName = "Last name is required";
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
            errors.email = "Valid email is required";
        if (!data.phoneNumber || !/^\d{10}$/.test(data.phoneNumber))
            errors.phoneNumber = "Valid phone number is required";
        if (!data.organizationType)
            errors.organizationType = "organization type is required";
        if (!data.workExperience)
            errors.workExperience = "Work experience is required";
        if (!data.message) errors.message = "Message is required";
        return errors;
    };

    const handleOverlayClick = (e) => {
        if (e.target.className === "contact-popup-container") {
            closePopup();
        }
    };

    return (
        <div className="contact-popup-container" onClick={handleOverlayClick}>
            <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
                <button id="closepop" className="close" onClick={closePopup}>
                    &times;
                </button>
                <form id="form" onSubmit={handleSubmit}>
                    <h2 className="contact-heading">Tell us your needs!</h2>
                    <div className="personal-info">
                        <div className="first-name">
                            <p>First name</p>
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <hr style={{ border: "1px solid" }} />
                            {errors.firstName && (
                                <p className="error-msg">{errors.firstName}</p>
                            )}
                        </div>
                        <div className="last-name">
                            <p>Last name</p>
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <hr style={{ border: "1px solid" }} />
                            {errors.lastName && (
                                <p className="error-msg">{errors.lastName}</p>
                            )}
                        </div>
                        <div className="email">
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <hr style={{ border: "1px solid" }} />
                            {errors.email && (
                                <p className="error-msg">{errors.email}</p>
                            )}
                        </div>
                        <div className="phone-number">
                            <p>Phone number</p>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phone-number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            <hr style={{ border: "1px solid" }} />
                            {errors.phoneNumber && (
                                <p className="error-msg">
                                    {errors.phoneNumber}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="select-container">
                        <select
                            name="organizationType"
                            id="organizationType"
                            value={formData.organizationType}
                            onChange={handleChange}
                        >
                            <option value="">Your organization type</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Non-Profit Organization">
                                Non-Profit Organization
                            </option>
                            <option value="Entrepreneur">Entrepreneur</option>
                            <option value="Government">Government</option>
                            <option value="Academia">Academia</option>
                        </select>
                        <svg
                            width="23"
                            height="12"
                            viewBox="0 0 23 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.722 11.2261C22.9154 11.0092 23.0147 10.7245 22.9982 10.4346C22.9817 10.1447 22.8508 9.8731 22.6341 9.67942L12.9219 0.645798C12.7208 0.466932 12.4608 0.368108 12.1914 0.368108C11.9221 0.368108 11.6621 0.466932 11.4609 0.645798L1.40023 9.67942C1.28394 9.77261 1.18786 9.88846 1.11786 10.0199C1.04785 10.1514 1.00538 10.2957 0.993031 10.4441C0.980683 10.5925 0.998716 10.7418 1.04603 10.883C1.09335 11.0242 1.16895 11.1543 1.26825 11.2654C1.36754 11.3765 1.48844 11.4662 1.62358 11.5291C1.75872 11.592 1.90528 11.6268 2.05431 11.6313C2.20335 11.6359 2.35175 11.61 2.49048 11.5555C2.6292 11.5009 2.75535 11.4187 2.86123 11.3138L12.0117 3.19668L21.1731 11.3248C21.3917 11.5165 21.6776 11.6138 21.968 11.5953C22.2584 11.5768 22.5296 11.444 22.722 11.2261Z"
                                fill="#121212"
                            />
                        </svg>
                        {errors.organizationType && (
                            <p className="error-msg" id="orgType">
                                {errors.organizationType}
                            </p>
                        )}
                    </div>
                    <div className="work-exp">
                        <p id="workExperienceHead">Work Experience</p>
                        <label htmlFor="1-5" style={{ paddingLeft: "0px" }}>
                            <input
                                type="radio"
                                name="workExperience"
                                id="1-5"
                                value="1-5 years"
                                checked={
                                    formData.workExperience === "1-5 years"
                                }
                                onChange={handleChange}
                            />
                            1-5 years
                        </label>
                        <label htmlFor="5-10">
                            <input
                                type="radio"
                                name="workExperience"
                                id="5-10"
                                value="5-10 years"
                                checked={
                                    formData.workExperience === "5-10 years"
                                }
                                onChange={handleChange}
                            />
                            5-10 years
                        </label>
                        <label htmlFor="10-15">
                            <input
                                type="radio"
                                name="workExperience"
                                id="10-15"
                                value="10-15 years"
                                checked={
                                    formData.workExperience === "10-15 years"
                                }
                                onChange={handleChange}
                            />
                            10-15 years
                        </label>
                        <label htmlFor="15-20">
                            <input
                                type="radio"
                                name="workExperience"
                                id="15-20"
                                value="15-20 years"
                                checked={
                                    formData.workExperience === "15-20 years"
                                }
                                onChange={handleChange}
                            />
                            15-20 years
                        </label>
                        <label
                            htmlFor="cxo-level"
                            style={{ paddingRight: "25px" }}
                        >
                            <input
                                type="radio"
                                name="workExperience"
                                id="cxo-level"
                                value="CXO level"
                                checked={
                                    formData.workExperience === "CXO level"
                                }
                                onChange={handleChange}
                            />
                            CXO level
                        </label>
                        {errors.workExperience && (
                            <p className="error-msg" id="workExperience">
                                {errors.workExperience}
                            </p>
                        )}
                    </div>
                    <div className="message">
                        <p>Message</p>
                        <textarea
                            name="message"
                            id="message"
                            rows="2"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <hr style={{ border: "1px solid" }} />
                        {errors.message && (
                            <p className="error-msg">{errors.message}</p>
                        )}
                    </div>
                    <div className="submit">
                        <button type="submit" id="submit">
                            Send Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

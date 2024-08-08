/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Header = () => {
    const closePopup = () => {
        let popup = document.getElementById("contact-popup-container");
        //toggling between active and non-active, there is no active class specifically
        if (popup.classList.contains("non-active")) {
            popup.classList.remove("non-active");
        } else {
            popup.classList.add("non-active");
        }
    };
    return (
        <header className="group-header">
            <div className="image-14-parent">
                <img
                    className="image-14-icon"
                    alt=""
                    src="/public/image-14@2x.png"
                />
                <div className="members-login-parent">
                    <a className="members-login">Member’s Login</a>
                    <a className="sign-up">Sign up</a>
                </div>
                <button
                    className="frame-button"
                    id="contactsales"
                    onClick={closePopup}
                >
                    <div className="contact-sales-wrapper">
                        <b className="contact-sales">Contact Sales</b>
                    </div>
                </button>
                <img
                    className="logo"
                    alt=""
                    src="/public/image-4removebgpreview-1-1@2x.png"
                />
            </div>
        </header>
    );
};

export default Header;

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
        <header >
            <nav className="nav-parent">
                <div className="btn-parent">
                    <div className="sign-up-wrapper">
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className="members-login-wrapper"> 
                        <button className="btn">Member’s Login</button></div>
                    <div className="contact-sales-wrapper">
                        <button className="btn">Contact Sales</button>
                    </div>
                    
                    {/* <a className="members-login">Member’s Login</a>
                    <a className="sign-up">Sign up</a> */}
                </div>
                
                <img
                    className="logo"
                    alt=""
                    src="/public/image-4removebgpreview-1-1@2x.png"
                />
            </nav>
        </header>
    );
};

export default Header;

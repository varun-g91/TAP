/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Footer = () => {
    return (
        <footer className="footer1">
            <div className="footer-item"></div>
            <div className="brandname">TROPES AND PIVOTS</div>
            <div className="divider"></div>
            <div className="footerline">
                <a className="link">About Us</a>
                <a className="link1">Our Work</a>
                <a className="link2">Our Blog</a>
                <a className="link3">Contact Us</a>
            </div>
            <a className="link4">Privacy Policy</a>
            <a className="link5">Terms of Service</a>
            <a className="link6">Cookie Preferences</a>
            <div className="brand-name-all">
                © 2024 TropesAndPivots. All rights reserved.
            </div>
            <div className="footer-title2" style={{ fontSize: "17px" }}>
                Follow us
            </div>
            <div className="social-media-icons">
                <div className="social-media-icon-squareinsta1">
                    <a
                        className="social-media-icon2"
                        target="_blank"
                        href="https://www.instagram.com/tropesandpivots?igsh=OGQ5ZDc2ODk2ZA=="
                    >
                        <img
                            className="instagram-icon"
                            alt=""
                            src="/public/instagram.svg"
                        />
                    </a>
                </div>
                <a className="social-media-icon-squarefaceb1">
                    <div className="social-media-icon"></div>
                    <img
                        className="facebook-icon1"
                        alt=""
                        src="/public/facebook1.svg"
                    />
                </a>
                <a
                    className="social-media-icon-squarelinke1"
                    target="_blank"
                    href="https://www.linkedin.com/company/tropes-and-pivots-learning-systems/"
                >
                    <div className="social-media-icon-parent">
                        <div className="social-media-icon"></div>
                        <img
                            className="linkedin-icon1"
                            alt=""
                            src="/public/linkedin1.svg"
                        />
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

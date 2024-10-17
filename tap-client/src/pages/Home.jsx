import React from "react";
import Tooltip from "../components/ToolTip";
import bubbleImage from "../../public/bubbleremovebgpreview-1-1@2x.png"; // Import the image
import starIcon from "../../public/iconlysharpboldstar.svg";
import monitorIcon from "../../public/monitor.svg";
import trophyIcon from "../../public/icontrophy.svg";
import lightbulbIcon from "../../public/iconsolidlightbulb.svg";
import ContactForm from "../components/ContactForm";

const Home = ({ togglePopup, showPopup, showModalHandler }) => {
    return (
        <div className="body">
            <div className="bg">
                <div className="red"></div>
                <div className="blue"></div>
                <div className="purple"></div>
            </div>
            <div className="elements">
                <span className="take-a-new" id="main-heading">
                    Take a ‘new turn’
                </span>
                <span className="we-help-pivot">
                    We help pivot careers with applied learnings and <br></br>
                    accelerate potential growth and path to excellence.
                </span>
                <img className="bubble" alt="" src={bubbleImage} />
                <button id="get-started" onClick={togglePopup}>
                    <div className="get-started">Get Started</div>
                </button>
                <span className="unlock">
                    <p className="unlock-the-talents">
                        Unlock the talents within,<br></br>Learning for the
                        future
                    </p>
                </span>
            </div>
            <div className="benefits">
                <div className="quality-education">Quality education</div>
                <div className="interactive-engaging">
                    Interactive & engaging
                </div>
                <div className="performance-tracking">Performance tracking</div>
                <div className="compliance-certification">
                    Compliance & certification
                </div>

                <div className="images">
                    <img
                        className="iconlysharpboldstar"
                        alt=""
                        src={starIcon}
                    />
                    <img className="monitor-icon" alt="" src={monitorIcon} />
                    <img
                        className="iconsolidlight-bulb"
                        alt=""
                        src={lightbulbIcon}
                    />
                    <img className="icontrophy" alt="" src={trophyIcon} />
                </div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
                <button className="member-benefits">Member benefits</button>
            </div>
            <div className="line3"></div>
            {/* <Tooltip /> */}
            {showPopup && (
                <div className="contact-form">
                    <ContactForm
                        closePopup={togglePopup}
                        showModal={showModalHandler}
                    />
                </div>
            )}
        </div>
    );
};

export default Home;

import React from "react";
import Tooltip from "./ToolTip";
import bubbleImage from "../../public/bubbleremovebgpreview-1-1@2x.png"; // Import the image
import starIcon from "../../public/iconlysharpboldstar.svg";
import monitorIcon from "../../public/monitor.svg";
import trophyIcon from "../../public/icontrophy.svg";
import lightbulbIcon from "../../public/iconsolidlightbulb.svg";

const Home = ({ togglePopup }) => {
    return (
        <div className="body">
            <div className="bg">
                <div className="red"></div>
                <div className="blue"></div>
                <div className="purple"></div>
            </div>
            <h1 className="take-a-new" id="main-heading">
                Take a ‘new turn’
            </h1>
            <div className="we-help-pivot">
                We help pivot careers with applied learnings and <br></br>accelerate
                potential growth and path to excellence.
            </div>
            <img className="bubble" alt="" src={bubbleImage} />
            <button id="get-started" onClick={togglePopup}>
                <div className="get-started">Get Started</div>
            </button>
            <div className="unlock">
                <p className="unlock-the-talents">
                    Unlock the talents within,<br></br>Learning for the future
                </p>
            </div>
            <div className="benefits">
                <div className="quality-education">Quality education</div>
                <div className="interactive-engaging">Interactive & engaging</div>
                <div className="performance-tracking">Performance tracking</div>
                <div className="compliance-certification">
                    Compliance & certification
                </div>

                <div className="images">
                    <img className="iconlysharpboldstar" alt="" src={starIcon} />
                    <img className="monitor-icon" alt="" src={monitorIcon} />
                    <img className="iconsolidlight-bulb" alt="" src={lightbulbIcon} />
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
        </div>
    );
};

export default Home;

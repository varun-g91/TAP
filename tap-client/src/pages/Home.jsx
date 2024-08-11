import React from "react";
import Tooltip from "../components/ToolTip";
import bubbleImage from "../../public/bubbleremovebgpreview-1-1@2x.png"; // Import the image
import starIcon from "../../public/iconlysharpboldstar.svg";
import monitorIcon from "../../public/monitor.svg";
import trophyIcon from "../../public/icontrophy.svg";
import lightbulbIcon from "../../public/iconsolidlightbulb.svg";

const Home = ({ togglePopup }) => {
    return (
        <>
            
            <div className="red"></div>
            <div className="blue"></div>
            <div className="purple"></div>
            <h1 className="take-a-new" id="main-heading">
                Take a ‘new turn’
            </h1>
            <div className="we-help-pivot">
                We help pivot careers with applied learnings and accelerate
                potential growth and path to excellence.
            </div>
            <img className="bubble" alt="" src={bubbleImage} />
            <button
                id="groupbutton"
                className="group-button"
                onClick={togglePopup}
            >
                <div className="aprimary-button-wrapper">
                    <div className="aprimary-button">
                        <div className="get-started">Get Started</div>
                    </div>
                </div>
            </button>
            <div className="unlock">
                <span className="unlock-the-talents-container1">
                    <p className="unlock-the-talents">
                        Unlock the talents within,
                    </p>
                    <p className="learning-for-the">Learning for the future</p>
                </span>
            </div>
            <div className="benefits">
                <div className="benchild">
                    <div className="quality-education">Quality education</div>
                    <div className="interactive-engaging">
                        Interactive & engaging
                    </div>
                    <div className="performance-tracking">
                        Performance tracking
                    </div>
                    <div className="compliance-certification">
                        Compliance & certification
                    </div>
                </div>
                <img
                    className="iconlysharpboldstar"
                    alt=""
                    src={starIcon}
                    id="iconlySharpBoldStar"
                />
                <img className="monitor-icon" alt="" src={monitorIcon} />
                <img className="icontrophy" alt="" src={trophyIcon} />
                <img
                    className="iconsolidlight-bulb"
                    alt=""
                    src={lightbulbIcon}
                />
                <div className="line"></div>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="rectangle-parent">
                    <div className="group-child"></div>
                    <div className="member-benefits">Member benefits</div>
                </div>
            </div>
            <div className="line3"></div>
            {/* <Tooltip /> */}
            
        </>
    );
};

export default Home;

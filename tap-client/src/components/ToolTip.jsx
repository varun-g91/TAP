import React, { useState } from "react";
import iconHelp from "/public/iconhelp.svg";
import vectorIcon from "/public/vector.svg";
import "../index.css"; // Import your CSS file

const Tooltip = () => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    return (
        <a href="#">
            <div
                className="tool-tip-container"
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
            >
                <img className="iconhelp" alt="Help Icon" src={iconHelp} />
                {isTooltipVisible && (
                    <div className="tool-tip">
                        <div className="tool-tip-child"></div>
                        <img className="vector-icon" alt="" src={vectorIcon} />
                        <div className="helper-text">Helper Text</div>
                    </div>
                )}
            </div>
        </a>
    );
};

export default Tooltip;

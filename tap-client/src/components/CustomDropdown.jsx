import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "../index.css";

const CustomDropdown = ({ options, toggleOrganizationType, error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        toggleOrganizationType(option);
        setIsOpen(false);
        setSelected(option);
    };

    return (
        <div className="dropdown-container">
            <div
                className={`dropdown-header ${isOpen ? "open" : ""}`}
                onClick={toggleDropdown}
            >
                <div className="dropdown-title">
                    {selected || "Your Organization Type"}
                </div>
                <div className="dropdown-arrow">
                    <BsChevronDown style={{ fontSize: "28px" }} />
                </div>
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    {options.map((option) => (
                        <li
                            key={option}
                            className={`dropdown-option ${
                                option === selected ? "selected" : ""
                            }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            
            
        </div>
    );
};

export default CustomDropdown;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Modal = ({ message, closeModal }) => {
    return (
        <div id="myModal" className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-alert" onClick={closeModal}>
                    &times;
                </span>
                <h2 className="alert-heading">Thank you for reaching out!</h2>
                <p id="modal-message">{message}</p>
            </div>
        </div>
    );
};

export default Modal;



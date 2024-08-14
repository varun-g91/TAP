/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ message, closeModal }) => {
    return (
        <div className="myModal"onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <AiOutlineClose className='close-alert' onClick={closeModal} />
                <h1 className="alert-heading">Thank you for reaching out!</h1>
                <p className="modal-message">{message}</p>
            </div>
        </div>
    );
};

export default Modal;



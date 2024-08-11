import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import Modal from "./components/Modal";

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const togglePopup = () => setShowPopup(!showPopup);

    const showModalHandler = (message) => {
        console.log("Show Modal Handler Called");
        setModalMessage(message);
        setShowModal(true);
    };

    const closeModalHandler = () => {
        console.log("Close Modal Handler Called");
        setShowModal(false);
    };

    return (
        <div className="desktop-52">
            <Header />
            <Home togglePopup={togglePopup} />
            <Footer />
            {showPopup && (
                <ContactForm
                    closePopup={togglePopup}
                    showModal={showModalHandler}
                />
            )}
            {showModal && (
                <Modal message={modalMessage} closeModal={closeModalHandler} />
            )}
        </div>
    );
}

export default App;

import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import VerificationPage from "./pages/VerificationPage";
import ContactForm from "./components/ContactForm";
import Modal from "./components/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Router>
            <div className="desktop-52">
                <Header />
                <Routes>
                    <Route path="/" element={<Home togglePopup={togglePopup} />} />
                    <Route
                        path="/users/:userId/verify/:token"
                        element={<VerificationPage />}
                    />
                </Routes>
                <Footer />
                {showPopup && (
                    <ContactForm closePopup={togglePopup} showModal={showModalHandler} />
                )}
                {showModal && (
                    <Modal message={modalMessage} closeModal={closeModalHandler} />
                )}
            </div>
        </Router>
    );
}

export default App;

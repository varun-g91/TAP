import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { VscVerified } from "react-icons/vsc";
import "../index.css";

const VerificationPage = () => {
    const { userId, token } = useParams();
    const [message, setMessage] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                console.log(
                    "Verifying with userId:",
                    userId,
                    "and token:",
                    token
                );
                const response = await axios.get(
                    `http://localhost:5555/api/tap-server/users/${userId}/verify/${token}`
                );
                console.log("Response:", response.data);
                setMessage(response.data.message);
                setIsVerified(true);
            } catch (error) {
                console.error(
                    "Error during verification:",
                    error.response ? error.response.data : error.message
                );
                setMessage(
                    "Verification failed. The link might be invalid or expired."
                );
                setIsVerified(false);
            }
        };
        verifyUser();
    }, [userId, token]);


    return (
        <div className="verification-container">
            <div className="verification-parent">
                {isVerified ? (
                    <>
                        <div id="verified-email">
                            <h1>Email verified successfully</h1>
                        </div>
                        <div id="verified-icon-div">
                            <VscVerified id="verified-icon" />
                        </div>
                        <p id="verified-msg">
                            You can now log into your account
                        </p>
                    </>
                ) : (
                    <p id="verified-msg">{message}</p>
                )}
            </div>
        </div>
    );
};

export default VerificationPage;

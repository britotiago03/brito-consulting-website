import React from 'react';
import './InquiryReceived.css';
import inquiryImage from '../assets/inquiry_received.webp'; // Adjust the path if necessary
import { Link } from 'react-router-dom';

const InquiryReceived = () => {
    return (
        <div className="inquiry-received">
            <h1 className="inquiry-title">Inquiry Received</h1>
            <p className="inquiry-subtitle">
                Thank you for getting in touch with Brito Consulting. We have received your inquiry and will respond to you as soon as possible.
            </p>
            <img src={inquiryImage} alt="Inquiry Received" className="inquiry-image" />
            <Link to="/" className="back-home-button" onClick={() => window.scrollTo(0, 0)}>Back to Home</Link>
        </div>
    );
};

export default InquiryReceived;

import React from 'react';
import inquiryIcon from '../../assets/process_icons/magnifying-glass-solid.png'; // Adjust the path if necessary
import meetingIcon from '../../assets/process_icons/handshake-solid.png'; // Adjust the path if necessary
import designIcon from '../../assets/process_icons/pencil-solid.png'; // Adjust the path if necessary
import developmentIcon from '../../assets/process_icons/code-solid.png'; // Adjust the path if necessary
import deliveryIcon from '../../assets/process_icons/rocket-solid.png'; // Adjust the path if necessary
import './Process.css';

const Process = () => {
    return (
        <section className="process-section">
            <h2 className="process-title">Our Process</h2>
            <div className="process-steps">
                <div className="process-step">
                    <img src={inquiryIcon} alt="Inquiry" className="process-icon inquiry-icon" />
                    <h3 className="process-step-title">Inquiry</h3>
                    <p className="process-step-description">Understanding your needs and goals</p>
                </div>
                <div className="process-step">
                    <img src={meetingIcon} alt="Meeting" className="process-icon meeting-icon" />
                    <h3 className="process-step-title">Meeting</h3>
                    <p className="process-step-description">Discussing project details and requirements</p>
                </div>
                <div className="process-step">
                    <img src={designIcon} alt="Design" className="process-icon design-icon" />
                    <h3 className="process-step-title">Design</h3>
                    <p className="process-step-description">Creating initial designs and getting feedback</p>
                </div>
                <div className="process-step">
                    <img src={developmentIcon} alt="Development" className="process-icon development-icon" />
                    <h3 className="process-step-title">Development</h3>
                    <p className="process-step-description">Building the solution with quality and speed</p>
                </div>
                <div className="process-step">
                    <img src={deliveryIcon} alt="Delivery" className="process-icon delivery-icon" />
                    <h3 className="process-step-title">Delivery</h3>
                    <p className="process-step-description">Delivering the final product and support</p>
                </div>
                <div className="process-line"></div>
            </div>
        </section>
    );
};

export default Process;

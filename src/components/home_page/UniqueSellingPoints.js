import React from 'react';
import fastIcon from '../../assets/bolt-solid.png'; // Adjust the path if necessary
import designIcon from '../../assets/rotate-solid.png'; // Adjust the path if necessary
import payIcon from '../../assets/credit-card-solid.png'; // Adjust the path if necessary
import './UniqueSellingPoints.css';

const UniqueSellingPoints = () => {
    return (
        <section id="about" className="usp-section">
            <h2 className="usp-title">Why Choose Us?</h2>
            <div className="usp-content">
                <div className="usp-item">
                    <img src={fastIcon} alt="Fast development and delivery" className="usp-icon" />
                    <p>Fast development and delivery</p>
                </div>
                <div className="usp-item">
                    <img src={designIcon} alt="Free initial design and revisions" className="usp-icon" />
                    <p>Free initial design and revisions</p>
                </div>
                <div className="usp-item">
                    <img src={payIcon} alt="Pay upon project delivery" className="usp-icon" />
                    <p>Pay upon project delivery</p>
                </div>
            </div>
        </section>
    );
};

export default UniqueSellingPoints;

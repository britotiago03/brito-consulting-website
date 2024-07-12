import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-card-icon">{icon}</div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-description">{description}</p>
            <button className="service-card-button">Learn More</button>
        </div>
    );
};

export default ServiceCard;

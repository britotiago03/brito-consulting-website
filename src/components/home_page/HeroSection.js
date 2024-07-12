// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <h1 className="hero-title">Welcome to Brito Consulting</h1>
            <p className="hero-subtitle">Innovative Software, Websites, and Mobile Apps Delivered Fast</p>
            <button className="hero-button">Get Started</button>
        </section>
    );
};

export default HeroSection;

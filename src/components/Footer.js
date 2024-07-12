import React from 'react';
import './Footer.css';
import logo from '../assets/footer/logo.png'; // Adjust the path if necessary
import facebookIcon from '../assets/footer/facebook.png'; // Adjust the path if necessary
import instagramIcon from '../assets/footer/instagram.png'; // Adjust the path if necessary
import linkedinIcon from '../assets/footer/linkedin.png'; // Adjust the path if necessary
import xIcon from '../assets/footer/x-twitter.png'; // Adjust the path if necessary
import youtubeIcon from '../assets/footer/youtube.png'; // Adjust the path if necessary

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-text">Copyright 2024 © Brito Consulting Inc.</p>
            <nav className="footer-nav">
                <a href="#privacy-policy" className="footer-link">Privacy Policy</a>
                <a href="#terms-of-service" className="footer-link">Terms of Service</a>
                <a href="#sitemap" className="footer-link">Sitemap</a>
            </nav>
            <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="footer-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={xIcon} alt="X" className="footer-icon" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
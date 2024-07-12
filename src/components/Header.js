import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brito-consulting-logo.png'; // Adjust the path if necessary
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-logo" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="Brito Consulting Logo" />
                <h1>Brito Consulting</h1>
            </Link>
            <nav className="header-nav">
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/news">News</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;

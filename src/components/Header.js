import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brito-consulting-logo.png'; // Adjust the path if necessary

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-8 flex flex-col md:flex-row justify-between items-center">
      <Link to="/" className="flex items-center mb-4 md:mb-0 no-underline" onClick={() => window.scrollTo(0, 0)}>
        <img src={logo} alt="Brito Consulting Logo" className="w-10 h-10 mr-5" />
        <h1 className="font-poppins text-2xl font-bold text-white">Brito Consulting</h1>
      </Link>
      <nav className="flex gap-4 md:gap-10">
        <Link to="/services" className="font-poppins text-lg text-white no-underline hover:underline">Services</Link>
        <Link to="/about" className="font-poppins text-lg text-white no-underline hover:underline">About Us</Link>
        <Link to="/portfolio" className="font-poppins text-lg text-white no-underline hover:underline">Portfolio</Link>
        <Link to="/news" className="font-poppins text-lg text-white no-underline hover:underline">News</Link>
        <Link to="/contact" className="font-poppins text-lg text-white no-underline hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

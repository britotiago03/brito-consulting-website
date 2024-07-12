import React from 'react';
import './Contact.css';
import tiagoBritoImage from '../../assets/tiago-brito.jpg'; // Adjust the path if necessary

const Contact = () => {
    return (
        <section className="contact-section">
            <h2 className="contact-title">Get in Touch</h2>
            <div className="contact-container">
                <div></div> {/* Empty div for the first column */}
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" className="contact-input" />
                    <input type="email" placeholder="Your Email" className="contact-input" />
                    <textarea placeholder="Your Message" className="contact-textarea"></textarea>
                    <button type="submit" className="contact-button">Submit Inquiry</button>
                </form>
                <div className="contact-info">
                    <img src={tiagoBritoImage} alt="Tiago Brito" className="contact-image" />
                    <p className="contact-name">Tiago Brito</p>
                    <p className="contact-title-info">Founder & CEO</p>
                    <p className="contact-email">Email: contact@britoconsulting.com</p>
                    <p className="contact-phone">Phone: +1 234 567 890</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

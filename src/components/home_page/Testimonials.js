import React from 'react';
import './Testimonials.css';
import johnDoe from '../../assets/testimonials/client1.jpg'; // Adjust the path if necessary
import janeSmith from '../../assets/testimonials/client2.jpg'; // Adjust the path if necessary
import michaelLee from '../../assets/testimonials/client3.jpg'; // Adjust the path if necessary

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">What Our Clients Say</h2>
            <div className="testimonials-content">
                <div className="testimonial">
                    <img src={johnDoe} alt="John Doe" className="testimonial-image" />
                    <div className="testimonial-text">
                        <p>Brito Consulting transformed our business with their quick and efficient development.</p>
                        <strong>John Doe</strong>
                        <a href="https://www.johndoe.com" target="_blank" rel="noopener noreferrer">www.johndoe.com</a>
                    </div>
                </div>
                <div className="testimonial">
                    <img src={janeSmith} alt="Jane Smith" className="testimonial-image" />
                    <div className="testimonial-text">
                        <p>Excellent service and support. Highly recommend Brito Consulting.</p>
                        <strong>Jane Smith</strong>
                        <a href="https://www.janesmith.com" target="_blank" rel="noopener noreferrer">www.janesmith.com</a>
                    </div>
                </div>
                <div className="testimonial">
                    <img src={michaelLee} alt="Michael Lee" className="testimonial-image" />
                    <div className="testimonial-text">
                        <p>Our new website looks fantastic and works flawlessly.</p>
                        <strong>Michael Lee</strong>
                        <a href="https://www.michaellee.com" target="_blank" rel="noopener noreferrer">www.michaellee.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';
import ServiceCard from './ServiceCard';
import softwareIcon from '../../assets/gears-solid.png'; // Adjust the path if necessary
import websiteIcon from '../../assets/globe-solid.png'; // Adjust the path if necessary
import mobileIcon from '../../assets/mobile-solid.png'; // Adjust the path if necessary
import './ServicesSection.css';

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container mx-auto">
                <h2 className="services-section-title">Our Services</h2>
                <div className="services-section-grid">
                    <ServiceCard
                        icon={<img src={softwareIcon} alt="Software Development" width="75" height="60" />}
                        title="Software Development"
                        description="We provide custom software solutions tailored to your business needs, ensuring seamless integration and scalability. From initial consultation to final deployment, our team of experts delivers high-quality software quickly and efficiently."
                    />
                    <ServiceCard
                        icon={<img src={websiteIcon} alt="Website Creation" width="60" height="60" />}
                        title="Website Creation"
                        description="Our team designs and develops stunning, responsive websites that engage visitors and drive conversions. Whether you need an e-commerce platform, a corporate site, or a personal blog, we create websites that stand out and perform."
                    />
                    <ServiceCard
                        icon={<img src={mobileIcon} alt="Mobile App Development" width="45" height="60" />}
                        title="Mobile App Development"
                        description="We build user-friendly mobile apps for iOS and Android that offer exceptional performance and intuitive interfaces. Our apps are designed to provide an outstanding user experience and meet your specific business goals."
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

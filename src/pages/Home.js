import React from 'react';
import HeroSection from '../components/home_page/HeroSection';
import ServicesSection from '../components/home_page/ServicesSection';
import UniqueSellingPoints from '../components/home_page/UniqueSellingPoints';
import Process from '../components/home_page/Process';
import Testimonials from '../components/home_page/Testimonials';
import Contact from '../components/home_page/Contact';

// Test

const Home = () => {
    return (
        <main>
            <HeroSection />
            <ServicesSection />
            <UniqueSellingPoints />
            <Process />
            <Testimonials />
            <Contact />
        </main>
    );
};

export default Home;

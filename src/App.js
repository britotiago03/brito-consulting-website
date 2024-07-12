import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InquiryReceived from './pages/InquiryReceived'; // Adjust the path if necessary

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inquiry-received" element={<InquiryReceived />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

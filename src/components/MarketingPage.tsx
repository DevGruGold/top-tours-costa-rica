import React from 'react';
import Header from './marketing/Header';
import Hero from './marketing/Hero';
import Tours from './marketing/Tours';
import Features from './marketing/Features';
import Contact from './marketing/Contact';
import Footer from './marketing/Footer';

const MarketingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <Tours />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default MarketingPage;
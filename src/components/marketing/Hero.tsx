import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-8">
      <div className="container mx-auto text-center">
        <span className="text-4xl block mb-4">🌴</span>
        <h2 className="text-3xl font-bold mb-2">Costa Rica Tours</h2>
        <p className="text-lg mb-6">Expert local guides • Best rates • Daily tours</p>
        
        <div className="flex justify-center gap-4">
          <a 
            href="tel:+50661500559"
            className="bg-white text-green-600 px-6 py-3 rounded-lg text-sm font-medium"
          >
            📞 Call Now
          </a>
          <a 
            href="https://wa.me/50661500559"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-sm font-medium"
          >
            💬 Message Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
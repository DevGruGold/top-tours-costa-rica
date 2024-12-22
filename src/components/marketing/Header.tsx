import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">Top Tours CR</h1>
        <div className="flex gap-2">
          <a 
            href="tel:+50689484857"
            className="bg-white border border-green-500 text-green-500 px-4 py-2 rounded-full text-sm"
          >
            📞 Call
          </a>
          <a 
            href="https://wa.me/50689484857"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
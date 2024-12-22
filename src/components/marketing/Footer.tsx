import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 py-8">
      <div className="container mx-auto text-center">
        <h3 className="font-bold mb-2">Top Tours Costa Rica</h3>
        <p className="text-gray-400 mb-2">La Fortuna, Costa Rica</p>
        <a 
          href="tel:+50689484857"
          className="text-green-400 hover:text-green-300"
        >
          +506 8948-4857
        </a>
        <div className="mt-6 text-xs text-gray-500">
          © 2024 Top Tours Costa Rica
        </div>
      </div>
    </footer>
  );
};

export default Footer;
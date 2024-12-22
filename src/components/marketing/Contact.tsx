import React from 'react';

const Contact = () => {
  return (
    <section className="bg-green-600 text-white px-4 py-8">
      <div className="container mx-auto text-center max-w-xl">
        <h3 className="text-2xl font-bold mb-6">Book Your Adventure</h3>
        <div className="space-y-4">
          <a 
            href="tel:+50689484857"
            className="block w-full bg-white text-green-600 py-3 rounded-lg font-medium hover:bg-green-50"
          >
            📞 Call +506 8948-4857
          </a>
          <a 
            href="https://wa.me/50689484857"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-400"
          >
            💬 Message on WhatsApp
          </a>
          <a 
            href="mailto:info@toptourscostarica.com"
            className="block w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-600"
          >
            ✉️ Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
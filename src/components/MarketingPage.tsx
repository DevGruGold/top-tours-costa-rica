import React from 'react';

const MarketingPage = () => {
  const tours = [
    {
      id: 1,
      title: "Arenal Volcano",
      desc: "Hiking & hot springs - Full day",
      price: "$89",
      emoji: "🌋"
    },
    {
      id: 2,
      title: "Manuel Antonio",
      desc: "Beach & wildlife - Full day",
      price: "$99",
      emoji: "🏖️"
    },
    {
      id: 3,
      title: "Coffee Tour",
      desc: "Plantation visit - Half day",
      price: "$69",
      emoji: "☕"
    },
    {
      id: 4,
      title: "Wildlife Photo",
      desc: "Guided photo tour - Half day",
      price: "$79",
      emoji: "📸"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-8">
        <div className="container mx-auto text-center">
          <span className="text-4xl block mb-4">🌴</span>
          <h2 className="text-3xl font-bold mb-2">La Fortuna Tours</h2>
          <p className="text-lg mb-6">Expert local guides • Best rates • Daily tours</p>
          
          <div className="flex justify-center gap-4">
            <a 
              href="tel:+50689484857"
              className="bg-white text-green-600 px-6 py-3 rounded-lg text-sm font-medium"
            >
              📞 Call Now
            </a>
            <a 
              href="https://wa.me/50689484857"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-sm font-medium"
            >
              💬 Message Us
            </a>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Popular Tours</h3>
          <div className="grid gap-4 max-w-xl mx-auto">
            {tours.map((tour) => (
              <div 
                key={tour.id}
                className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center hover:border-green-500 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{tour.emoji}</span>
                  <div>
                    <h4 className="font-medium">{tour.title}</h4>
                    <p className="text-sm text-gray-500">{tour.desc}</p>
                    <p className="text-green-600 font-medium">{tour.price}</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/50689484857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200"
                >
                  Book
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="container mx-auto max-w-xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <span className="block text-3xl mb-2">⭐️</span>
              <h4 className="font-medium">Top Rated</h4>
              <p className="text-sm text-gray-500">500+ Reviews</p>
            </div>
            <div className="text-center">
              <span className="block text-3xl mb-2">🚐</span>
              <h4 className="font-medium">Hotel Pickup</h4>
              <p className="text-sm text-gray-500">Included</p>
            </div>
            <div className="text-center">
              <span className="block text-3xl mb-2">💰</span>
              <h4 className="font-medium">Best Price</h4>
              <p className="text-sm text-gray-500">Guaranteed</p>
            </div>
            <div className="text-center">
              <span className="block text-3xl mb-2">🗣️</span>
              <h4 className="font-medium">English/Spanish</h4>
              <p className="text-sm text-gray-500">Bilingual Guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
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

      {/* Footer */}
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
    </div>
  );
};

export default MarketingPage;
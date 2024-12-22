import React from 'react';

const Features = () => {
  return (
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
  );
};

export default Features;
import React from 'react';

const tours = [
  {
    id: 1,
    title: "Kayak Over a Waterfall",
    desc: "Adventure seekers only - Half day",
    priceRange: "$75-150",
    emoji: "🛶"
  },
  {
    id: 2,
    title: "Sloth Speed Dating",
    desc: "Slow-paced wildlife encounter - Half day",
    priceRange: "$75-150",
    emoji: "🦥"
  },
  {
    id: 3,
    title: "Smokin and Day Drinking",
    desc: "El Salto Rope Swing - Full day",
    priceRange: "$75-150",
    emoji: "🍻"
  },
  {
    id: 4,
    title: "Arenal Volcano",
    desc: "Hiking & hot springs - Full day",
    priceRange: "$75-150",
    emoji: "🌋"
  },
  {
    id: 5,
    title: "Manuel Antonio",
    desc: "Beach & wildlife - Full day",
    priceRange: "$75-150",
    emoji: "🏖️"
  },
  {
    id: 6,
    title: "Coffee Tour",
    desc: "Plantation visit - Half day",
    priceRange: "$75-150",
    emoji: "☕"
  },
  {
    id: 7,
    title: "Wildlife Photo",
    desc: "Guided photo tour - Half day",
    priceRange: "$75-150",
    emoji: "📸"
  },
  {
    id: 8,
    title: "Zip Line Extreme",
    desc: "Canopy adventure - Half day",
    priceRange: "$75-150",
    emoji: "🎢"
  },
  {
    id: 9,
    title: "Night Jungle Trek",
    desc: "Nocturnal wildlife spotting - Evening",
    priceRange: "$75-150",
    emoji: "🌙"
  },
  {
    id: 10,
    title: "White Water Rafting",
    desc: "Rapids adventure - Full day",
    priceRange: "$75-150",
    emoji: "🚣"
  },
  {
    id: 11,
    title: "Surf Lessons",
    desc: "Beach & waves - Half day",
    priceRange: "$75-150",
    emoji: "🏄"
  },
  {
    id: 12,
    title: "Horseback Beach Ride",
    desc: "Sunset tour - Evening",
    priceRange: "$75-150",
    emoji: "🐎"
  }
];

const Tours = () => {
  return (
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
                  <p className="text-green-600 font-medium">{tour.priceRange}</p>
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
  );
};

export default Tours;
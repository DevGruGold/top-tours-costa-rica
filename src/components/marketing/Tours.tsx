import React, { useState } from 'react';
import BookingForm from '../BookingForm';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sunrise, Bird, Mountain, Trees } from 'lucide-react';

const tours = [
  {
    id: 2,
    title: "Sloth Speed Dating",
    desc: "Slow-paced wildlife encounter - Half day",
    priceRange: "Seasonal pricing",
    emoji: "🦥"
  },
  {
    id: 4,
    title: "Arenal Volcano",
    desc: "Hiking & hot springs - Full day",
    priceRange: "Seasonal pricing",
    emoji: "🌋"
  },
  {
    id: 5,
    title: "Manuel Antonio & Damas Islands",
    desc: "Beach, wildlife & mangrove tour - Full day",
    priceRange: "Seasonal pricing",
    emoji: "🏖️"
  },
  {
    id: 6,
    title: "Coffee Tour",
    desc: "Plantation visit - Half day",
    priceRange: "Seasonal pricing",
    emoji: "☕"
  },
  {
    id: 7,
    title: "Wildlife Photo",
    desc: "Guided photo tour - Half day",
    priceRange: "Seasonal pricing",
    emoji: "📸"
  },
  {
    id: 8,
    title: "Zip Line Extreme",
    desc: "Canopy adventure - Half day",
    priceRange: "Seasonal pricing",
    icon: Mountain
  },
  {
    id: 9,
    title: "Night Jungle Trek",
    desc: "Nocturnal wildlife spotting - Evening",
    priceRange: "Seasonal pricing",
    emoji: "🌙"
  },
  {
    id: 10,
    title: "White Water Rafting",
    desc: "Rapids adventure - Full day",
    priceRange: "Seasonal pricing",
    emoji: "🚣"
  },
  {
    id: 11,
    title: "Surf Lessons",
    desc: "Beach & waves - Half day",
    priceRange: "Seasonal pricing",
    emoji: "🏄"
  },
  {
    id: 12,
    title: "Horseback Beach Ride",
    desc: "Sunset tour - Evening",
    priceRange: "Seasonal pricing",
    emoji: "🐎"
  },
  {
    id: 13,
    title: "Sunrise Energy Yoga",
    desc: "Morning yoga session - Early morning",
    priceRange: "Seasonal pricing",
    icon: Sunrise
  },
  {
    id: 14,
    title: "Morning Bird Watching",
    desc: "Guided birding tour - Early morning",
    priceRange: "Seasonal pricing",
    icon: Bird
  },
  {
    id: 15,
    title: "Monkeys & Mammals",
    desc: "Wildlife spotting tour - Half day",
    priceRange: "Seasonal pricing",
    icon: Trees
  }
];

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<{ title: string; priceRange: string } | null>(null);

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
                {tour.icon ? (
                  <tour.icon className="w-8 h-8" />
                ) : (
                  <span className="text-3xl">{tour.emoji}</span>
                )}
                <div>
                  <h4 className="font-medium">{tour.title}</h4>
                  <p className="text-sm text-gray-500">{tour.desc}</p>
                  <p className="text-green-600 font-medium italic text-sm">{tour.priceRange}</p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setSelectedTour({ title: tour.title, priceRange: tour.priceRange })}
                    className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200"
                  >
                    Book
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  {selectedTour && (
                    <BookingForm 
                      tourTitle={selectedTour.title}
                      tourPrice={selectedTour.priceRange}
                    />
                  )}
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
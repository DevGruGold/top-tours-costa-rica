import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface BookingFormProps {
  tourTitle: string;
  tourPrice: string;
}

const BookingForm = ({ tourTitle, tourPrice }: BookingFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [adults, setAdults] = useState(2);

  const handleBooking = () => {
    if (!date) {
      alert("Please select a date");
      return;
    }

    const message = encodeURIComponent(
      `*New Booking Request*\n` +
      `Tour: ${tourTitle}\n` +
      `Date: ${format(date, 'MMMM d, yyyy')}\n` +
      `Adults: ${adults}\n` +
      `Price: ${tourPrice}/person`
    );

    // Open WhatsApp in two new tabs for both numbers
    window.open(`https://wa.me/50689484857?text=${message}`, '_blank');
    window.open(`https://wa.me/50661500559?text=${message}`, '_blank');
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-lg">Select Date & Guests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => date < new Date()}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Number of Adults</label>
          <select 
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full rounded-md border border-gray-300 p-2"
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600"
        >
          Book via WhatsApp
        </button>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
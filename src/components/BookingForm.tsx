
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface BookingFormProps {
  tourTitle: string;
  tourPrice: string;
}

const BookingForm = ({ tourTitle, tourPrice }: BookingFormProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [adults, setAdults] = useState(1);

  const handleAdultsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty input for editing
    if (value === '') {
      return;
    }
    
    // Parse the number and ensure it's valid
    const numValue = parseInt(value, 10);
    
    // Only update if it's a valid number and at least 1
    if (!isNaN(numValue) && numValue >= 1) {
      setAdults(numValue);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      return;
    }

    const message = `*New Booking Request*\nTour: ${tourTitle}\nDate: ${format(date, 'MMMM d, yyyy')}\nAdults: ${adults}\nPrice: ${tourPrice}/person`;
    const encodedMessage = encodeURIComponent(message);

    // Try to open WhatsApp first
    window.open(`https://wa.me/50661500559?text=${encodedMessage}`, '_blank');

    // Set up email as fallback
    setTimeout(() => {
      const mailtoLink = `mailto:youremail@example.com?subject=Tour Booking Request&body=${encodedMessage}`;
      window.location.href = mailtoLink;
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Select Date</Label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => newDate && setDate(newDate)}
          className="rounded-md border"
        />
      </div>
      
      <div>
        <Label htmlFor="adults">Number of Adults</Label>
        <Input
          id="adults"
          type="number"
          min="1"
          value={adults}
          onChange={handleAdultsChange}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;

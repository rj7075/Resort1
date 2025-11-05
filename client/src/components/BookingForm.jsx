// src/components/BookingForm.jsx
import React, { useState } from "react";

const BookingForm = ({ room }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    specialRequests: "",
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    const bookingData = {
      room: room.name,
      roomId: room.id,
      ...formData,
      totalPrice: calculateTotalPrice(),
    };

    console.log("Booking submitted:", bookingData);
    // In a real app, you would send this to your backend
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  const calculateTotalPrice = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;

    // Calculate number of nights
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);

    // Ensure check-out is after check-in
    if (checkOutDate <= checkInDate) return 0;

    const nights = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay));

    // Calculate total price (base price * nights)
    const basePrice = parseFloat(
      room.price.replace("$", "").replace("/night", "")
    );
    return (basePrice * nights).toFixed(2);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Stay</h3>

      {/* Booking Success Message */}
      {bookingSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p className="font-medium">Booking Successful!</p>
          <p>We've sent a confirmation to your email.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder="Your name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
          <label className="block text-gray-700 font-medium mb-2">Dates</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                required
              />
              <div className="text-sm text-gray-500 mt-1">Check-in</div>
            </div>
            <div>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn || new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                required
              />
              <div className="text-sm text-gray-500 mt-1">Check-out</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Guests</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Adult" : "Adults"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Child" : "Children"}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Max {room.maxGuests} guests
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Special Requests
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            placeholder="Any special requirements or requests..."
          ></textarea>
        </div>

        {/* Price Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">
              {room.price} x{" "}
              {calculateTotalPrice() /
                parseFloat(room.price.replace("$", "").replace("/night", "")) ||
                0}{" "}
              nights
            </span>
            <span className="font-medium">${calculateTotalPrice()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t border-gray-200">
            <span>Total</span>
            <span>${calculateTotalPrice()}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
        >
          Book Now
        </button>

        <div className="text-center mt-4 text-sm text-gray-500">
          You won't be charged yet
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

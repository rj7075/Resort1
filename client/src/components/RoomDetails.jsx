// src/components/RoomDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ImageGallery from "./ImageGallery";

import { rooms } from "../assets/data";
import BookingForm from "./BookingForm";
import AmenitiesList from "./Amenities";

const RoomDetails = ({ openLightbox }) => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // Find room by ID
    const foundRoom = rooms.find((r) => r.id === parseInt(id));
    setRoom(foundRoom);
    window.scrollTo(0, 0);
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Room not found
          </h2>
          <Link
            to="/"
            className="text-teal-600 hover:text-teal-800 font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = (bookingData) => {
    console.log("Booking submitted:", bookingData);
    // In a real app, you would send this to your backend
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back to Rooms Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="flex items-center text-teal-600 hover:text-teal-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to All Rooms
        </Link>
      </div>

      {/* Room Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {room.name}
        </h1>
        <div className="flex items-center justify-center mt-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  i < room.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-600">
            {room.rating} ({room.reviews} reviews)
          </span>
        </div>
        <p className="mt-6 text-2xl font-semibold text-teal-600">
          {room.price}
        </p>
      </div>

      {/* Booking Success Message */}
      {bookingSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50 animate-fade-in">
          <p className="font-medium">Booking Successful!</p>
          <p>We've sent a confirmation to your email.</p>
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Gallery and Details */}
        <div className="lg:col-span-2">
          <ImageGallery
            images={room.images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            openLightbox={openLightbox}
          />

          {/* Room Description */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About This Room
            </h2>
            <p className="text-gray-700 leading-relaxed">{room.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Amenities & Features
            </h2>
            <AmenitiesList amenities={room.amenities} />
          </div>

          {/* Room Size and Details */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gray-500 mb-2">Room Size</div>
              <div className="text-xl font-semibold">{room.size} sq ft</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gray-500 mb-2">Max Guests</div>
              <div className="text-xl font-semibold">
                {room.maxGuests} Guests
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gray-500 mb-2">Bed Configuration</div>
              <div className="text-xl font-semibold">{room.beds}</div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Guest Reviews
            </h2>
            <div className="space-y-6">
              {room.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="text-gray-500 text-sm mt-4">
                    {testimonial.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
            <BookingForm room={room} onBookNow={handleBookNow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

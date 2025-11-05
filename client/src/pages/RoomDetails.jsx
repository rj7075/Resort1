// src/pages/RoomDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { rooms } from "../assets/data";

const RoomDetails = ({ openLightbox }) => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Find room by ID
    const foundRoom = rooms.find((r) => r.id === parseInt(id));
    setRoom(foundRoom);
    window.scrollTo(0, 0);
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back to Rooms Link */}
      <div className="mb-8">
        <Link
          to="/#rooms"
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Gallery and Details */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div
            className="relative rounded-xl overflow-hidden h-96 cursor-pointer"
            onClick={() => openLightbox(room.images[selectedImage])}
          >
            <img
              src={room.images[selectedImage]}
              alt={`Room view ${selectedImage + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">
              {selectedImage + 1} / {room.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {room.images.map((image, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden h-24 cursor-pointer border-2 ${
                  selectedImage === index
                    ? "border-teal-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {room.amenities.map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
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
        </div>

        {/* Right Column - Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
            <BookingForm room={room} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

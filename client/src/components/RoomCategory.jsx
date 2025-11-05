// src/components/RoomsCategory.jsx
import React from "react";
import { Link } from "react-router-dom";
import { rooms } from "../assets/data";

const RoomsCategory = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Accommodations
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our luxurious rooms and suites designed for your ultimate
            comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">
                    {room.name}
                  </h3>
                  <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                    {room.price}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{room.shortDescription}</p>
                <Link
                  to={`/room/${room.id}`}
                  className="block mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md text-center transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsCategory;

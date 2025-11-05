// src/components/AmenitiesList.jsx
import React from "react";

const AmenitiesList = ({ amenities }) => {
  const amenitiesByCategory = {
    room: amenities.filter((a) => a.category === "room"),
    bathroom: amenities.filter((a) => a.category === "bathroom"),
    services: amenities.filter((a) => a.category === "services"),
    entertainment: amenities.filter((a) => a.category === "entertainment"),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Room Amenities */}
      {amenitiesByCategory.room.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Room Features
          </h3>
          <ul className="space-y-2">
            {amenitiesByCategory.room.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Bathroom Amenities */}
      {amenitiesByCategory.bathroom.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Bathroom</h3>
          <ul className="space-y-2">
            {amenitiesByCategory.bathroom.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Services */}
      {amenitiesByCategory.services.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
          <ul className="space-y-2">
            {amenitiesByCategory.services.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Entertainment */}
      {amenitiesByCategory.entertainment.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Entertainment
          </h3>
          <ul className="space-y-2">
            {amenitiesByCategory.entertainment.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AmenitiesList;

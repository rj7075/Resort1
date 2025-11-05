// src/pages/StoriesPage.jsx
import React from "react";
import { stories } from "../assets/data";

const StoriesPage = ({ openLightbox }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Stories
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover memorable experiences from our guests and the resort's rich
          history
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onClick={() => openLightbox(story.image)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {story.title}
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{story.author}</p>
                  <p className="text-sm text-gray-500">{story.date}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{story.excerpt}</p>
              <p className="text-gray-700">{story.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;

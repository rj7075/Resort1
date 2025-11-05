// src/components/Stories.jsx
import React from "react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "A Dream Wedding",
      excerpt:
        "Our special day was made perfect by the Paradise Resort team...",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Family Vacation Memories",
      excerpt:
        "Our kids still talk about the amazing kids club and beach activities...",
      image:
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Anniversary Celebration",
      excerpt:
        "Celebrating 25 years together at this beautiful resort was unforgettable...",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Corporate Retreat Success",
      excerpt:
        "Our team building event was elevated by the exceptional facilities...",
      image:
        "https://images.unsplash.com/photo-1576675466969-38eeae4b41d8?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover memorable experiences from our guests and the resort's rich
            history
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {story.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{story.excerpt}</p>
                <button className="mt-4 text-teal-600 hover:text-teal-800 font-medium flex items-center">
                  Read Full Story
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;

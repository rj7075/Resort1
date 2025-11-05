// src/components/Reviews.jsx
import React, { useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Our stay at Paradise Resort was absolutely magical. The staff went above and beyond to make our anniversary special. The private beach dinner was a highlight we'll never forget!",
      date: "March 15, 2023",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Excellent facilities and beautiful location. The infinity pool overlooking the ocean was stunning. The only improvement would be faster service at peak times.",
      date: "February 28, 2023",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 5,
      text: "Perfect family vacation! Our kids loved the activities club, and we appreciated the attentive childcare. The family suite was spacious and well-appointed.",
      date: "April 5, 2023",
    },
    {
      id: 4,
      name: "David Williams",
      rating: 5,
      text: "The spa experience was world-class. I've been to luxury resorts worldwide, and the massage therapists here are among the best I've ever experienced. Will definitely return!",
      date: "January 20, 2023",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Guest Reviews
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our guests have to say about their Paradise experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex mb-2">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {reviews[currentIndex].name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {reviews[currentIndex].date}
                </p>
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>

            <p className="text-gray-700 text-lg italic">
              "{reviews[currentIndex].text}"
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-teal-600" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

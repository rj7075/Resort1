// src/components/ImageGallery.jsx
import React from "react";

const ImageGallery = ({
  images,
  selectedImage,
  setSelectedImage,
  openLightbox,
}) => {
  return (
    <div>
      {/* Main Image */}
      <div
        className="relative rounded-xl overflow-hidden h-96 cursor-pointer"
        onClick={() => openLightbox(images[selectedImage])}
      >
        <img
          src={images[selectedImage]}
          alt={`Room view ${selectedImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden h-24 cursor-pointer border-2 ${
              selectedImage === index ? "border-teal-500" : "border-transparent"
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
    </div>
  );
};

export default ImageGallery;

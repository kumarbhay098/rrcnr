'use client'
import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/NR3.jpg", // Replace with your image paths
    "/NR4.jpg",
    "/NR5.jpg",
  ];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={img}
              alt={`carousel-image-${index}`}
              className="w-full h-auto rounded-lg" // Tailwind styling for responsive images
            />
          </div>
        ))}
      </div>
      {/* Optional: Add Navigation (Prev/Next buttons) */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;

"use client";
import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  poster: string; // URL for the image poster
  videos: string[]; // Video URLs
}

const CarouselVideo: React.FC<CarouselProps> = ({ poster, videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [poster, ...videos]; // Combine the poster and videos

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full flex justify-center">
      <div className="flex justify-center overflow-hidden w-auto h-[400px] lg:h-[700px] relative">
        {/* Render the current slide */}
        {currentIndex === 0 ? (
          <Image
            src={slides[currentIndex]}
            alt="Poster"
            width={1200}
            height={700}
            draggable={false}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={slides[currentIndex]}
            controls
            loop
            className="video-style w-full h-full object-cover"
          />
        )}
      </div>

      {/* Conditionally render navigation buttons */}
      {slides.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl sm:text-4xl font-bold px-4 py-2 focus:outline-none"
            onClick={handlePrev}
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl sm:text-4xl font-bold px-4 py-2 focus:outline-none"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default CarouselVideo;

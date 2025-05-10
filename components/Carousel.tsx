"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type CarouselProps = {
  images: { src: string; alt: string; link?: string }[];
  className?: string;
};

const Carousel = ({ images, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 10 seconds
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className || ''}`}>
      {/* Slides */}
      <div className="w-full flex items-center justify-center">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
      </div>
{/*
      * Left Arrow *
      <button
        className="absolute top-1/2 left-0 lg:left-4 transform -translate-y-1/2 text-4xl px-4 py-2 text-white font-bold focus:outline-none"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      * Right Arrow *
      <button
        className="absolute top-1/2 right-0 lg:right-4 transform -translate-y-1/2 text-4xl px-4 py-2 text-white font-bold focus:outline-none"
        onClick={nextSlide}
      >
        &#10095;
      </button>

     
      * Dots *
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            } focus:outline-none`}
            onClick={() => setCurrentIndex(idx)}
          ></button>
        ))}
      </div>
      */}
    </div>
  );
};

export default Carousel;

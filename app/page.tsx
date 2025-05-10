"use client";

import React, { useEffect, useState } from "react";
import Introduction from "@/components/sectionPage/Introduction";
import About from "@/components/sectionPage/About";
import MoviePoster from "@/components/sectionPage/MoviePoster";
import Quotes from "@/components/sectionPage/Quotes";
import HeroLayout from "@/components/sectionPage/Hero/HeroLayout";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200, // Adjust when the animation triggers
      once: true,
    });
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main>
      {/* Popup Component */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg text-center">
          <p className="text-center md:text-8xl oswald px-16 text-5xl">
            New Year Sale!
          </p>
            <p className="mb-2 mt-6 oswald text-2xl ">Download our app today and enjoy streaming our latest shows.</p> <p className="mb-8 oswald text-2xl ">Find us on Roku, Amazon FireTV, and Vimeo</p>
            <p className="mt-4 text-center line-through text-red-500 text-3xl oswald">
            $5.99/mo.
                 <strong> or </strong>
            $65/yr.
          </p>
          <p className="mt-6 mb-10 text-center text-green-500 text-4xl oswald">
            $2.99/mo.
                 <strong> or </strong>
            $20.25/yr.
          </p>
            <button
              onClick={closePopup}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <HeroLayout />
      <div className="flex justify-center">
        <div id="intro" className="text-center container poppins p-10">
          <Introduction />
          <About />
          <div className="flex flex-col items-center">
            <h1 className="flex text-4xl mt-6 mb-6" data-aos="fade-right">
              Featured Shows
            </h1>
            <div className="w-full max-w-[700px]">
              <MoviePoster movieID={0} />
              <MoviePoster movieID={1} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center mb-32">
            <h1 className="flex text-4xl mt-40 lg:mt-26 mb-6" data-aos="fade-right">
              Now Casting
            </h1>
            <div className="w-full max-w-[700px]">
              <MoviePoster movieID={2} />
            </div>
          </div>
          <Quotes />
        </div>
      </div>
    </main>
  );
}

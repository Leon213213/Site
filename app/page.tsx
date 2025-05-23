"use client";

import React, { useEffect } from "react";
import Introduction from "@/components/sectionPage/Introduction";
import About from "@/components/sectionPage/About";
import MoviePoster from "@/components/sectionPage/MoviePoster";
import Quotes from "@/components/sectionPage/Quotes";
import HeroLayout from "@/components/sectionPage/Hero/HeroLayout";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200, // Adjust when the animation triggers
      once: true,
    });
  }, []);

  return (
    <main>
      {/* Main Content */}
      
      <HeroLayout />
      <div className="flex justify-center">
        <div id="intro" className="text-center container poppins p-10">
          <Introduction />
          <About />
          {/*
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
          */}
          <Quotes />
        </div>
      </div>
    </main>
  );
}

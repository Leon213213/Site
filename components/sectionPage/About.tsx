"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Carousel from "../Carousel";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const { ref: h1Ref, inView: h1InView } = useInView({ threshold: 0, triggerOnce: false });

  return (
    <section className="container">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row bg-black items-center justify-between space-y-20 pb-56 pt-20 lg:space-y-0 lg:space-x-8 py-8 lg:pl-20">
        <div className="text-center lg:text-left w-full px-4 md:px-6">
          <h1
            ref={ref}
            className={`oswald text-4xl pb-8 sm:text-5xl md:text-6xl lg:text-7xl transition-opacity duration-700 text-center ${
              inView ? "opacity-100 animate-shiftTop" : "opacity-0"
            }`}
          >
            Zed Brothers LLC
          </h1>
          <p className={`text-md sm:text-2xl pt-18 pb-20 lg:pb-0 lg:pt-4 transition-opacity duration-700 ${inView ? "opacity-100 animate-shiftTop-2" : "opacity-0"}`}>
            We specialize in comprehensive cost estimating services for construction and development projects. 
            Our expertise covers residential, commercial, and industrial projects, providing detailed estimates 
            for materials, labor, equipment, and project timelines. We offer specialized services in renovation 
            cost analysis, new construction budgeting, and project feasibility studies. Our team utilizes 
            advanced software and industry-standard methodologies to deliver accurate, reliable estimates 
            that help you make informed decisions and maintain project profitability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

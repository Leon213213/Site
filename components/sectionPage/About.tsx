"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Carousel from "../Carousel";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const { ref: h1Ref, inView: h1InView } = useInView({ threshold: 0, triggerOnce: false });

  // Corrected images array usage
  const images = [
    {
      src: "/img/adPoster/tv_ad1.jpg",
      alt: "TV ad poster showcasing ON1Y Network services.",
      link: "/film",
    },
    {
      src: "/img/adPoster/admin_ad1.jpg",
      alt: "Admin ad poster showcasing ON1Y Network services.",
    },
  ];

  return (
    <section className="container">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row bg-black items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 py-8 lg:pl-20">
        <div className="text-center lg:text-left w-full px-4 md:px-6">
          <h1
            ref={ref}
            className={`oswald text-4xl pb-8 sm:text-5xl md:text-6xl lg:text-7xl transition-opacity duration-700 ${
              inView ? "opacity-100 animate-shiftTop" : "opacity-0"
            }`}
          >
            ON1Y NETWORK
          </h1>
          <p className={`text-md sm:text-2xl pt-18 pb-20 lg:pb-0 lg:pt-4 transition-opacity duration-700 ${inView ? "opacity-100 animate-shiftTop-2" : "opacity-0"}`}>
            We offer a wide range of original programming, including interactive shows,
            documentaries, and more designed to cater to the diverse interests of our audience.
            As ON1Y Network continues to grow, it is projected to become a major player in the
            streaming industry, with ON1Y Movies, Kids, and Sports coming soon.
          </p>
        </div>

        {/* Corrected Carousel Usage */}
        <div className="w-full flex justify-center">
          <Carousel images={images} />
        </div>
      </div>

      {/* Subscription Call-to-Action */}
      <div className="lg:text-5xl md:text-4xl text-3xl oswald text-center lg:text-start py-28 lg:py-8">
        <h1 className="z-20">
          <span className="relative p-1 inline-block w-fit mr-2">
            <div className={`bg-gray-500 absolute z-[-1] ${h1InView ? "animate-bars" : ""} h-full w-fit`}></div>
            <strong className="relative">Explore exclusive content,</strong>
          </span>
          engaging videos, and more by subscribing to
          <span className="relative p-1 inline-block w-fit mr-2">
            <div className={`bg-gray-500 absolute z-[-1] ${h1InView ? "animate-bars-delayed-1" : ""} h-full w-fit`}></div>
            <strong ref={h1Ref} className="relative">ON1Y Network</strong>
          </span>
          <span>
            today! Don&apos;t miss out on the latest updates and exciting new releases - visit{" "}
          </span>
          <a
            href="https://on1ynetwork.vhx.tv/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            On1yNetwork.vhx.tv
          </a>{" "}
          or{" "}
          <span className="relative py-1 inline-block w-fit">
            <span className={`bg-gray-500 absolute z-[-1] ${h1InView ? "animate-bars-delayed-2" : ""} h-full w-fit`}></span>
            <strong className="relative">download on all streaming platforms.</strong>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About;

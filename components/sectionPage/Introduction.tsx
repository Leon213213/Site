"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

const Introduction = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: pRef, inView: pInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="container px-4 sm:px-8 md:px-12 bg-black py-12 md:py-20 grid place-items-center text-2xl">
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 items-center justify-center lg:justify-start">
        
        {/* Image div with reordered classes for mobile */}
        <div className="lg:mt-0 w-full flex justify-center  order-last lg:order-first mt-10 md:mt-0 med:ml-28">
        <Link href="/tech" draggable={false} onDragStart={(e) => e.preventDefault()}>
        <Image
              src="/img/adPoster/tech_ad1.jpg"
              alt="Poster of all the platforms we run our apps and services."
              width={500}
              height={500}
              draggable={false}
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
              sizes="(max-width: 600px) 80vw, (max-width: 1024px) 50vw, 30vw"
            />
          </Link>
        </div>

        {/* Text div */}
        <div className="text-center  lg:text-left p-6 w-full">
          {/* Heading */}
          <h1
            ref={h1Ref}
            className={`oswald opacity-0  mb-4 lg:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${
              h1InView ? "animate-shiftTop" : ""
            }`}
          >
            ON1Y LLC
          </h1>
          {/* Paragraph */}
          <p
            ref={pRef}
            className={`pt-2 pb-0 md:pb-10 lg:pb-0 opacity-0 text-sm sm:text-2xl lg:block ${pInView ? "animate-shiftTop-2" : ""}`}
          >
            Welcome to our technology company, where innovation meets excellence. We are
            dedicated to providing cutting-edge solutions that empower businesses to thrive
            in the digital age. Our team of experts specializes in developing custom software,
            mobile applications, and web solutions tailored to meet your specific needs. With a
            focus on creativity, quality, and customer satisfaction, come experience the difference
            with our technology company today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

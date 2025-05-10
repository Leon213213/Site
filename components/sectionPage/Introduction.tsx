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
    <section className="container px-4 sm:px-8 md:px-12 bg-black pb-20 pt-12 md:py-20 grid place-items-center text-2xl">
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 items-center justify-center lg:justify-start">
        
        {/* Text div */}
        <div className="text-center lg:text-left p-6 w-full order-first lg:order-first">
          {/* Heading */}
          <h1
            ref={h1Ref}
            className={`oswald opacity-0 mb-4 lg:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${
              h1InView ? "animate-shiftTop" : ""
            }`}
          >
            Zed Brothers LLC
          </h1>
          {/* Paragraph */}
          <p
            ref={pRef}
            className={`pt-2 pb-0 md:pb-10 lg:pb-0 opacity-0 text-sm sm:text-2xl lg:block ${pInView ? "animate-shiftTop-2" : ""}`}
          >
            Welcome to our cost estimating company, where precision meets efficiency. We deliver
            comprehensive cost estimates that transform complex projects into clear, actionable plans.
            Our team combines industry expertise with advanced technology to provide accurate
            estimates for construction, renovation, and development projects. We understand that
            every project is unique, which is why we offer tailored solutions that align with your
            specific requirements and budget. Experience the confidence that comes with precise
            cost projections and transparent communication.
          </p>
        </div>

        {/* Image div */}
        <div className="lg:mt-0 w-full flex justify-center order-last lg:order-last mt-10 md:mt-0 med:ml-28">
          <Link href="/tech" draggable={false} onDragStart={(e) => e.preventDefault()}>
            <Image
              src="/img/adPoster/poster.png"
              alt="Poster of all the platforms we run our apps and services."
              width={300}
              height={100}
              draggable={false}
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto max-h-[600px] object-contain"
              sizes="(max-width: 600px) 80vw, (max-width: 200px) 50vw, 30vw"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

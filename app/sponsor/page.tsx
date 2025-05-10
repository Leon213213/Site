"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import NavLayout from "@/components/nav/NavLayout";

const Sponsor = () => {
  const { ref: refOne, inView: viewOne } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: refTwo, inView: viewTwo } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: refThree, inView: viewThree } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <NavLayout />
      <section className="flex justify-center h-fit">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container p-6 pt-20 pb-20">
          {/* Column 1 */}
          <div className="flex flex-col items-center h-full">
            <div className="max-w-[700px] w-full h-[450px] relative">
              <Image
                src="/img/sponsor/cloud.jpg"
                alt="cloud system image"
                width={700}
                height={450}
                draggable={false}
                className="w-full h-full object-cover my-6"
                priority
              />
            </div>
            <div
              ref={refOne}
              className={`max-w-[700px] w-full mt-4 p-6 bg-black text-white opacity-0 flex-grow ${
                viewOne ? "animate-shiftTop" : ""
              }`}
            >
              <h1 className="text-4xl font-extrabold my-6 mb-2">Who We Are</h1>
              <p>
                On1y was founded in August 2022 with a goal of creating
                innovative solutions to improve customer experience while
                streaming, gaming, and scrolling television and mobile apps.
                December 2022, ON1Y LLC established its first entertainment app,
                ON1Y Network, launching the company into the film and streaming
                service industry.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center h-full">
            <div className="max-w-[700px] w-full h-[450px] relative">
              <Image
                src="/img/sponsor/desk.jpg"
                alt="desk laptop image"
                width={700}
                height={450}
                draggable={false}

                className="w-full h-full object-cover my-6"
                priority
              />
            </div>
            <div
              ref={refTwo}
              className={`max-w-[700px] w-full mt-4 p-6 bg-black text-white opacity-0 flex-grow ${
                viewTwo ? "animate-shiftTop" : ""
              }`}
            >
              <h1 className="text-4xl font-extrabold my-6 mb-2">Advertising Goals</h1>
              <ul className="list-disc pl-5">
                <li>Increasing brand awareness.</li>
                <li>Reaching new audiences.</li>
                <li>Driving sales.</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center h-full">
            <div className="max-w-[700px] w-full h-[450px] relative">
              <Image
                src="/img/sponsor/technology.webp"
                alt="technology system image"
                width={700}
                height={450}
                draggable={false}

                className="w-full h-full object-cover my-6"
                priority
              />
            </div>
            <div
              ref={refThree}
              className={`max-w-[700px] w-full mt-4 p-6 bg-black text-white opacity-0 flex-grow ${
                viewThree ? "animate-shiftTop" : ""
              }`}
            >
              <h1 className="text-4xl font-extrabold my-6 mb-2">
                Benefits and Partnerships
              </h1>
              <p>
                By partnering and advertising with ON1Y LLC, you can expect
                increased brand visibility, access to our target audience, and
                potential for co-branded initiatives. We also offer our partners
                commercial-free advertising campaigns on our internet and social
                media platforms, as well as low-cost marketing promotions on our
                streaming television programming.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;

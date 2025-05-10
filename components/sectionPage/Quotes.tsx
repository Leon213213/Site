"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Quotes = () => {
  const [num, setNum] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const quotes = [
    {
      id: 1,
      quote: `"ON1Y LLC exceeded my expectations. Highly recommend!"`,
      author: "- L. McGill",
    },
    {
      id: 2,
      quote: ` "Working with ON1Y LLC was a pleasure from start to finish. They were
        professional and I would definitely work with them again!"`,
      author: "-A. Morgan",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prevNum) => (prevNum < quotes.length - 1 ? prevNum + 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, [quotes.length]);
  return (
    <section className=" bg-black h-fit flex flex-col  mt-10 pl-10 pr-10 pt-10 pb-2 text-start">
      <h1
        className={`text-4xl translate-x-[-200px] mb-4 opacity-0 ${
          inView ? "animate-shiftRight" : ""
        }`}
      >
        Want to Join Our Team?
      </h1>
      <p ref={ref}>
        If you are interested in joining ON1Y LLC, please feel free to contact
        us at HR@on1yglobal.com to inquire about current job opportunities. We
        look forward to hearing from you soon!{" "}
      </p>
      <div className="pt-10 h-[200px] text-center mt-4 lg:mt-0">
        <h2>{quotes[num].quote} </h2>
        <p>{quotes[num].author}</p>
      </div>
    </section>
  );
};

export default Quotes;

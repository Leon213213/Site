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
      quote: `"Efficient and very reliable with their time and work, will work with them again any day!"`,
      author: "- D. Wagner",
    },
    {
      id: 2,
      quote: ` "Very professional and knowledgeable gentlemen - project cost was estimated practically on the dot!"`,
      author: "-G. Parker",
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
        Interested in our services?
      </h1>
      <p ref={ref}>
        If you are interested in our cost estimating services, please feel free to contact
        us at estimates@zedbrothers.com to discuss your project requirements. We
        look forward to helping you achieve your project goals!{" "}
      </p>
      <div className="pt-10 h-[200px] text-center mt-4 lg:mt-0">
        <h2>{quotes[num].quote} </h2>
        <p>{quotes[num].author}</p>
      </div>
    </section>
  );
};

export default Quotes;

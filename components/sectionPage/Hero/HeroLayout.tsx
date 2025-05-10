"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import Hero from ".";
import NavLayout from "@/components/nav/NavLayout";

const HeroLayout = () => {
  const [displayNav] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const numRef = useRef<number>(0);

  useEffect(() => {
    // Detect screen size
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavLayout numRef={numRef} displayNav={displayNav} isMobile={isMobile} />
      <Hero numRef={numRef} />
    </>
  );
};

export default HeroLayout;

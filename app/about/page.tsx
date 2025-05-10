"use client";

import React from "react";
import NavLayout from "@/components/nav/NavLayout";

function About() {
  return (
    <>
      <NavLayout />
      <div className="flex flex-col items-center p-4 h-fit pt-10">
        <img src="/img/logo/logo.png" alt="logo" className="w-1/4 h-1/4 mt-[90px] 
        border-gray-300/50 border-2 rounded-full shadow-lg transition-all 
        duration-300 hover:shadow-xl" />
        <div className="flex flex-row items-center h-fit">
          
        
        <div className="max-w-4xl ml-20">
        <h1 className="text-4xl font-bold mb-6">About Zed Brothers</h1>
          <p className="text-lg mb-4">
            Zed Brothers LLC is a premier cost estimating company based in Brunswich, Georgia, 
            specializing in delivering precise and comprehensive cost estimates for construction 
            and development projects. Our team combines industry expertise with cutting-edge 
            technology to provide accurate and reliable estimates.
          </p>
          <p className="text-lg mb-4">
            We offer a wide range of cost estimating services, including detailed construction 
            cost analysis, renovation estimates, project feasibility studies, and material 
            takeoffs. Our expertise spans residential, commercial, and industrial projects, 
            ensuring we can handle projects of any scale.
          </p>
          <p className="text-lg mb-4">
            What sets us apart is our commitment to accuracy and transparency. We utilize 
            advanced software and methodologies to provide detailed breakdowns of costs, 
            helping our clients make informed decisions and maintain control over their 
            project budgets. Our goal is to be your trusted partner in successful project 
            planning and execution.
          </p>
        </div>
        <img src="/img/logo/logo.png" alt="founder1" className="w-1/4 h-1/4 ml-20 mb-20" />
        </div>
      </div>
    </>
  );
}

export default About;
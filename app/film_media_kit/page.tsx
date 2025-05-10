"use client";
import React, { useEffect, useState } from "react";
import NavLayout from "@/components/nav/NavLayout";
import Aos from "aos";
import Text_Carousel from "@/components/Text_Carousel";

const Film_Media_Kit = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return; // Check if we are on the client side
    Aos.init({
      duration: 1000,
    });

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setIsVisible(false); // Hide the button when scrolled near the bottom
      } else {
        setIsVisible(true); // Show the button when not at the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const introSection = document.getElementById("intro");
    if (introSection) {
      window.scrollTo({
        top: introSection.offsetTop - 80, // Adjust the 50px value to your desired offset
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <NavLayout />
      <section className="flex h-full flex-col items-center oswald">
        <div className="container mx-auto">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
            autoPlay
            muted
            loop
            preload="metadata"
            disablePictureInPicture
            playsInline
          >
            <source src="/videos/bg.mp4" type="video/mp4" />
          </video>
          <section className="flex flex-col relative z-10">
            <div
              data-aos="fade-right"
              className="flex flex-col justify-center items-center h-screen text-6xl oswald tracking-wider text-center"
              style={{ visibility: "visible" }}
            >
              <strong>ON1Y LLC Media Kit</strong>
              <hr
                className="mt-6 mx-auto rounded bg-white"
                style={{ width: "40%", height: "2px", border: "none" }}
              />
              <strong className="mt-4">Film</strong>
            </div>

            {/* Scroll Down Section */}
            <div
              className={`relative flex flex-col items-center text-center z-10 ${!isVisible ? "hidden" : ""}`}
            >
              <div className="absolute bottom-0 w-full">
                <a
                  className="flex flex-col items-center justify-center"
                  href="#"
                  onClick={handleScrollClick}
                >
                  <h1 className="text-2xl w-fit h-[40px] md:h-[40px]">Scroll Down</h1>
                  <svg
                    className="w-6 h-6 animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12l-7.5 7.5L4.5 12"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="flex justify-center mb-10 w-full" id="intro"></div>
              <div
                data-aos="fade-right"
                className="text-4xl oswald tracking-wider text-center mt-60 mb-8"
                style={{ visibility: "visible" }}
              >
                <strong>Mission Statement</strong>
              </div>
              <p className="text-left text-white leading-relaxed ml-16 mr-16 pr-16 pl-16 mb-80 lg:mb-80 text-center tracking-wider text-xl">
                At ON1Y LLC, we are committed to delivering high-quality television and film production services that resonate with audiences and elevate brands...
              </p>
              <Text_Carousel />
              <hr className="mt-20 mb-14 mx-auto rounded bg-white" style={{ width: "60%", height: "2px", border: "none" }} />
              <div className="container mb-20 bg-black">
                <div
                  data-aos="fade-right"
                  className="text-4xl oswald tracking-wider text-center mt-10 mb-8"
                  style={{ visibility: "visible" }}
                >
                  <strong>Freelance Services</strong>
                </div>

                {/* First Table */}

                <div className="flex justify-center mb-36 w-full text-lg lg:text-2xl">
                  <table className="text-left table-fixed border-2 rounded-lg border-white overflow-hidden mx-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-center border-b-2">Position</th>
                        <th className="px-4 py-2 text-center border-b-2">Rate per Hour</th>
                        <th className="px-4 py-2 text-center border-b-2">Rate per Day (8 hours)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 pt-4 text-center">Director of Photography</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$75</span> <span className="text-green-500">$37.50</span>
                        </td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$600</span> <span className="text-green-500">$300</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Motion Graphic Designer</td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$70</span> <span className="text-green-500">$35</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$560</span> <span className="text-green-500">$280</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Camera Operator</td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$60</span> <span className="text-green-500">$30</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$480</span> <span className="text-green-500">$240</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Film Editor</td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$65</span> <span className="text-green-500">$32.50</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$520</span> <span className="text-green-500">$260</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center border-b-0">Videographer</td>
                        <td className="px-4 py-2 text-center border-b-0">
                          <span className="line-through text-red-500">$50</span> <span className="text-green-500">$25</span>
                        </td>
                        <td className="px-4 py-2 text-center border-b-0">
                          <span className="line-through text-red-500">$400</span> <span className="text-green-500">$200</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center border-b-0">Data Wrangler</td>
                        <td className="px-4 py-2 text-center border-b-0">
                          <span className="line-through text-red-500">$40</span> <span className="text-green-500">$20</span>
                        </td>
                        <td className="px-4 py-2 text-center border-b-0">
                          <span className="line-through text-red-500">$320</span> <span className="text-green-500">$160</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 pb-4 text-center border-b-0">Film Producer</td>
                        <td className="px-4 py-2 pb-4 text-center border-b-0">
                          <span className="line-through text-red-500">$85</span> <span className="text-green-500">$42.50</span>
                        </td>
                        <td className="px-4 py-2 pb-4 text-center border-b-0">
                          <span className="line-through text-red-500">$680</span> <span className="text-green-500">$340</span>
                        </td>
                      </tr>
                    </tbody>

                  </table>
                </div>
                <hr className="mb-10 mx-auto rounded bg-white" style={{ width: "80%", height: "2px", border: "none" }} />

                <div
                  data-aos="fade-right"
                  className="text-4xl oswald tracking-wider mt-48 mb-8 flex-col text-center"
                  style={{ visibility: "visible" }}
                >
                  <strong>Marketing and Advertising Services</strong>
                </div>


                {/* Second Table */}
                <div className="flex justify-center mb-48 w-full text-2xl">
                  <table className="text-left table-fixed border-2 rounded-lg text-lg lg:text-2xl border-white overflow-hidden mx-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-center border-b-2">Service Type</th>
                        <th className="px-4 py-2 text-center border-b-2">Rate per Hour</th>
                        <th className="px-4 py-2 text-center border-b-2">Rate per Project</th>
                      </tr>
                    </thead>
                    <tbody className="border-2 border-white">
                      <tr>
                        <td className="px-4 py-2 pt-4 text-center">Business to Business Advertising (B2B)</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$120</span> <span className="text-green-500">$60</span>
                        </td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$1,000</span> <span className="text-green-500">$500</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Social Media Content Creation</td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$50</span> <span className="text-green-500">$25</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$400</span> <span className="text-green-500">$200</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Marketing and Promotions</td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$60</span> <span className="text-green-500">$30</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className="line-through text-red-500">$500</span> <span className="text-green-500">$250</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center border-b-0">Commercial Advertising (B2C)</td>
                        <td className="px-4 py-2 text-center border-b-0">
                          <span className="line-through text-red-500">$100</span> <span className="text-green-500">$50</span>
                        </td>
                        <td className="px-4 py-2 text-center border-b-0">
                          <span className="line-through text-red-500">$800</span> <span className="text-green-500">$400</span>
                        </td>
                      </tr>
                    </tbody>

                  </table>
                </div>

                <hr className="mt-6 mx-auto rounded bg-white" style={{ width: "94%", height: "2px", border: "none" }} />
                <div className="flex flex-col items-center text-center mt-6 mb-8">
                  <div
                    data-aos="fade-right"
                    className="text-4xl oswald tracking-wider mt-6 mb-8"
                    style={{ visibility: "visible" }}
                  >
                    <strong>Contact Us</strong>
                  </div>
                  <p className="text-white leading-relaxed mb-14 tracking-wide text-xl">
                    To inquire about services or request a custom quote, please reach out to us at{" "}
                    <strong>corporate@on1yglobal.com</strong> or call <strong>(817) 937-7906</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Film_Media_Kit;
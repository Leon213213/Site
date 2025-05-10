"use client";
import React, { useEffect, useState } from "react";
import NavLayout from "@/components/nav/NavLayout";
import Aos from "aos";
import Text_Carousel_Tech from "@/components/Text_Carousel_Tech";

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
            <source src="/videos/MEDIA KIT tech video.mp4" type="video/mp4" />
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
              <strong className="mt-4">Tech</strong>
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
                On1y LLC is a forward-thinking tech company based in Fort Worth, Texas, established in 2023. Our mission is to leverage
                technology to create innovative solutions that empower businesses and individuals. We specialize in comprehensive
                tech services, including app and web development, graphic design, UI/UX design, and both front-end and back-end development.
              </p>
              <Text_Carousel_Tech />
              <hr className="mt-20 mb-14 mx-auto rounded bg-white" style={{ width: "60%", height: "2px", border: "none" }} />
              <div className="container mb-20 bg-black">
                <div
                  data-aos="fade-right"
                  className="text-4xl oswald tracking-wider text-center pt-10 mt-10 mb-8"
                  style={{ visibility: "visible" }}
                >
                  <strong>Freelance Services</strong>
                </div>

                {/* First Table */}

                <div className="flex justify-center mb-12 w-full text-lg lg:text-2xl flex flex-col">
                  <table className="text-left table-fixed border-2 rounded-lg border-white overflow-hidden mx-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-center border-b-2">Position</th>
                        <th className="px-4 py-2 text-center border-b-2">Rate per Hour</th>

                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-2 pt-4 text-center border-b-0">Front-End Development</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$80</span> <span className="text-green-500">$40</span>
                        </td>

                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center border-b-0">Back-End Development</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$95</span> <span className="text-green-500">$47.50</span>
                        </td>

                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">App Development</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$100</span> <span className="text-green-500">$50</span>
                        </td>

                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Web Development</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$90</span> <span className="text-green-500">$45</span>
                        </td>

                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">Graphic Design</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$75</span> <span className="text-green-500">$36.50</span>
                        </td>

                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-center">UI/UX Design</td>
                        <td className="px-4 py-2 pt-4 text-center">
                          <span className="line-through text-red-500">$85</span> <span className="text-green-500">$42.50</span>
                        </td>

                      </tr>
                      

                    </tbody>
                  </table>
                  <div className="text-lg text-center mt-24">
                    <h1 className="pb-4"><strong>Project-Based Pricing</strong></h1>
                    <p className="pl-40 pr-40">Pricing for projects can be discussed based on the specific requirements and scope. We offer
                      flexible pricing options to accommodate the budgets of our clients, whether they are companies
                      or individual entrepreneurs.</p>
                    <div className="flex flex-col items-center justify-center text-center">
                      <h1 className="pb-4 mt-10"><strong>Maintenance and Updates</strong></h1>
                      <ul className="text-left list-disc list-inside">
                        <li>Maintenance and support for apps and websites</li>
                        <li>$50/hour for routine updates and maintenance.</li>
                        <li>Custom maintenance packages are available upon request.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr className="mt-6 mb-10 mx-auto rounded bg-white" style={{ width: "90%", height: "2px", border: "none" }} />
                <div className="flex flex-col items-center text-center">
                  <div
                    data-aos="fade-right"
                    className="text-4xl oswald tracking-wider mb-8"
                    style={{ visibility: "visible" }}
                  >
                    <strong>Contact Us</strong>
                  </div>
                  <p className="text-white leading-relaxed tracking-wide text-xl">
                    For inquiries, quotes, or to learn more about our services, please visit our website or contact us directly:
                    <br></br>Website: http://on1yglobal.com
                    <br></br>Email: corporate@on1yglobal.com
                    <br></br> Phone: (817)-937-7906
                  </p>
                </div>
                <hr className="mt-20 mb-2 mx-auto rounded bg-white" style={{ width: "98%", height: "2px", border: "none" }} />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Film_Media_Kit;
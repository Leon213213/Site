import Carousel from "@/components/Carousel";

interface NavLayoutProps {
  numRef?: React.MutableRefObject<number>;
}

const Hero: React.FC<NavLayoutProps> = ({ numRef }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const introSection = document.getElementById("intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollImages = [
    {
      src: "/img/company/image1.jpg",
      alt: "Image 1",
    },
    {
      src: "/img/company/image4.jpg",
      alt: "Image 4",
    }
  ];

  return (
    <section
      onMouseMove={() => {
        if (numRef) {
          numRef.current = 0;
        }
      }}
      className="bg-black md:h-screen"
    >
      {/* Overlay div that dims the video */}
      <div className="text-center h-[100%] py-20 sm:py-0 flex justify-center items-center overflow-hidden relative">
        <div className="absolute flex flex-col items-center h-fit sm:bottom-10 bottom-0 w-full text-center z-10">
        <div className="flex flex-col items-center">
        <Carousel className="w-fit" images={scrollImages} />
              <h1 className="text-2xl w-fit h-[14px] mt-4 mb-2">Scroll Down</h1>
              
            </div>
          <a
            className="relative flex justify-center cursor-pointer"
            href="#"
            onClick={handleScroll}
          >
            
            <svg
              className="w-6 h-6 absolute bottom-[-39px] animate-bounce inline-block"
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
    </section>
  );
};

export default Hero;

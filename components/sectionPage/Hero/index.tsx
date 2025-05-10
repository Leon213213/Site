
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


  return (
    <section
      onMouseMove={() => {
        if (numRef) {
          numRef.current = 0;
        }
      }}
      className=" bg-black md:h-screen "
    >
      {/* Overlay div that dims the video */}
      <div className="text-center h-[100%] py-20 sm:py-0  flex justify-center items-center overflow-hidden relative">
        <video
          className="h-full w-full object-contain lg:object-cover"
          autoPlay
          muted
          loop
          preload="metadata"
          playsInline
        >
          <source height="1000" src="/videos/ON1Y.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute
    cursor-pointer
    flex flex-col
    items-center
    h-fit
     sm:bottom-10 bottom-0 w-full text-center z-10"
        >
          <a
            className="relative flex justify-center"
            href="#"
            onClick={handleScroll}
          >
            <h1 className="text-2xl  w-fit  h-[60px]">Scroll Down</h1>

            <svg
              className="w-6 h-6  absolute bottom-0  animate-bounce inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5" // In JSX, `stroke-width` becomes `strokeWidth`
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

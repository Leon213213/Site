import { Swiper, SwiperSlide } from "swiper/react"; // Import core components
import "swiper/css"; // Import Swiper styles
import { Autoplay } from 'swiper/modules';

function Text_Carousel_Tech() {
  return (
    <div className="relative w-full h-screen bg-black">
      <video
        className="absolute object-cover w-full h-full z-0 opacity-50"
        autoPlay
        loop
        muted
        preload="metadata"
        playsInline
      >
        <source src="/videos/tech_slideshow.mp4" type="video/mp4" />
      </video>
      <Swiper
        modules={[Autoplay]} // Register the Autoplay module
        autoplay={{
          delay: 4500, // Delay between slides (in milliseconds)
          disableOnInteraction: false, // Autoplay doesn't stop on interaction
        }}
        loop={true} // Enable infinite looping
        speed={3000}
        className="relative w-full h-full z-10"
      > 
        {/* Slide 1: Services Offered */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-white h-full">
            <div className="text-4xl oswald tracking-wider text-center mb-4">
              <strong>App Development</strong>
            </div>
            <ul className="text-center leading-relaxed tracking-wider text-xl items-center">
              <li>Development of custom mobile and desktop applications.</li>
              <li>Platforms: iOS, Android, Roku, Amazon Fiis re TV, and Vimeo OTT.</li>
              <li><strong className="mb-20">Example Work</strong></li>
              <li>The ON1Y Network app, available on Roku, Amazon Fire TV, and Vimeo OTT</li>
            </ul>
          </div>
        </SwiperSlide>
        {/* Slide 2: Team Expertise */}
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center text-white h-full">
          <div className="text-4xl oswald tracking-wider text-center mb-4">
              <strong>Web Development</strong>
            </div>
              <ul className="text-center leading-relaxed tracking-wider text-xl">
                <li>Creation of responsive and dynamic websites from concept to completion.</li>
                <li>E-commerce solutions with payment gateway integration.</li>
                <li><strong className="mb-20">Example Work</strong></li>
                <li>on1yglobal.com – A showcase of our web development capabilities.</li>
                <li>helpnextgen.org – A nonprofit platform designed to support the next generation of tech and filmmakers</li>
              </ul>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-white h-full">
            <div className="text-4xl oswald tracking-wider text-center mb-4">
              <strong>Graphic Design</strong>
            </div>
            <ul className="text-center leading-relaxed tracking-wider text-xl">
              <li>Branding and logo design.</li>
              <li>Marketing materials, including brochures, flyers, and digital assets.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-white h-full">
            <div className="text-4xl oswald tracking-wider text-center mb-4">
              <strong>UI/UX Design</strong>
            </div>
            <ul className="text-center leading-relaxed tracking-wider text-xl">
              <li>User interface design focused on enhancing user experience across apps and websites.</li>
              <li>Usability testing and user research to ensure optimal design solutions.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-white h-full">
            <div className="text-4xl oswald tracking-wider text-center mb-4">
              <strong>Front-End and Back-End Development</strong>
            </div>
            <ul className="text-center leading-relaxed tracking-wider text-xl">
              <li>Front-end development using the latest technologies (HTML, CSS, JavaScript, React).</li>
              <li>Back-end development for server-side applications and database management.</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Text_Carousel_Tech;

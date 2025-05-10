import { Swiper, SwiperSlide } from "swiper/react"; // Import core components
import "swiper/css"; // Import Swiper styles
import { Autoplay } from 'swiper/modules';

function Text_Carousel() {
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
        <source src="/videos/slideshow.mp4" type="video/mp4" />
      </video>
      <Swiper
        modules={[Autoplay]} // Register the Autoplay module
        autoplay={{
          delay: 8000, // Delay between slides (in milliseconds)
          disableOnInteraction: false, // Autoplay doesn't stop on interaction
        }}
        loop={true} // Enable infinite looping
        speed={4000}
        className="relative w-full h-full z-10"
      > 
        {/* Slide 1: Services Offered */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-white h-full">
            <div className="text-4xl oswald tracking-wider text-center mb-4">
              <strong>Services Offered</strong>
            </div>
            <ul className="text-center leading-relaxed tracking-wider text-xl">
              <li>Film Production</li>
              <li>Television Production</li>
              <li>Commercial Production</li>
              <li>Post-Production Services</li>
              <li>Motion Graphics and Animation</li>
              <li>Social Media Content Creation</li>
              <li>Marketing and Promotions</li>
            </ul>
          </div>
        </SwiperSlide>
        {/* Slide 2: Team Expertise */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-white h-full">
            <div className="text-2xl lg:text-4xl oswald tracking-wider text-center mb-4">
              <strong>Team Expertise</strong>
            </div>
            <div className="text-center leading-relaxed tracking-wider text-lg lg:text-xl">
              <p>
                Our talented team comprises industry professionals with extensive experience in
                various production roles:
              </p>
              <ul>
                <li>Directors of Photography: Crafting stunning visuals that tell compelling stories.</li>
                <li>Film Editors: Seamlessly weaving footage into a cohesive narrative.</li>
                <li>Motion Graphic Designers: Creating captivating animations that enhance storytelling.</li>
                <li>Camera Operators: Capturing high-quality images that bring projects to life.</li>
                <li>Videographers: Delivering professional video services for events and promotions.</li>
                <li>Data Wranglers: Ensuring efficient management and organization of media assets.</li>
                <li>Film Producers: Overseeing projects from inception to final delivery, ensuring timely and budget-friendly outcomes.</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Text_Carousel;

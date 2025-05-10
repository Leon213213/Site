import Link from "next/link";
import Image from "next/image";
import HamStatus from "./types";
const RightNavbar: React.FC<HamStatus> = ({ active, setActive }) => {
  return (
    <>
      <nav
        className=" w-fit z-10 h-full fixed right-0 !transition-all !duration-[300ms] !ease-in-out "
        style={{
          transform: active ? "translateX(0%)" : "translateX(100%)",
        }}
      >
        <div className=" flex flex-col text-2xl  items-start justify-center bg-black h-full">
          <Link href="/" className="flex group  relative  cursor-pointer p-4">
            <div className="bg-gray-300 absolute  top-0 w-[10px]"></div>
            <span>Home</span>
            <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          
          <Link
            href="/internships"
            className="flex cursor-pointer  relative group  p-4"
          >
            <span>Interships</span>
            <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link
            href="/film"
            className="flex cursor-pointer relative group  p-4"
          >
            <span>Films</span>

            <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link
            href="/tech"
            className="flex cursor-pointer relative group  p-4"
          >
            <span>Tech</span>

            <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link
            href="/sponsor"
            className="flex cursor-pointer relative group  p-4"
          >
            <span>Ad Sponsor</span>

            <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link
            href="/contact"
            className="flex cursor-pointer relative group p-4"
          >
            <span>Apply</span>
            <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <span className=" w-full fixed bottom-0 flex align-center justify-center items-center p-0 ">
            <Image
              width={100}
              height={100}
              src="/img/logo/on1y-logo.png"
              alt="On1y-logo"
            />
          </span>
        </div>
      </nav>
      {active && (
        <div
          onClick={() => {
            if (setActive) {
              setActive(!active);
            }
          }}
          className="overlay bg-black opacity-30  fixed w-screen h-screen !z-[1]"
        ></div>
      )}
    </>
  );
};

export default RightNavbar;

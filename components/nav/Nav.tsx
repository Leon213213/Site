import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamStatus from "./types";
const Nav: React.FC<HamStatus> = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false); // <-- Add this line

  

  const handleDropdownToggle = (dropdownId: string) => {
    if (activeDropdown === dropdownId) {
      setActiveDropdown(null); // Close the dropdown if it's already active
    } else {
      setActiveDropdown(dropdownId); // Open the dropdown
    }
  };

  return (
    <nav className="fixed z-40 w-full bg-black text-white oswald text-3xl">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Desktop Logo (hidden on mobile) */}
        <Link href="/" className="hidden md:flex items-center">
          <Image width={100} height={100} src="/img/logo/on1y-logo.png" alt="On1y-logo" />
          <span className="font-mono font-thin text-white whitespace-nowrap overflow-hidden border-r-2 border-white inline-block w-[0] animate-typing animate-blink">
            LLC
          </span>
        </Link>

        {/* Mobile Logo (hidden on desktop) */}
        <Link href="/" className="flex md:hidden items-center">
          <Image width={50} height={50} src="/img/logo/on1y-logo.png" alt="On1y-logo" />
          <span className="font-mono font-thin text-white whitespace-nowrap overflow-hidden border-r-2 border-white inline-block w-[0] animate-typing animate-blink">
            LLC
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center text-lg px-0 p-4 w-full md:w-auto bg-black md:bg-transparent">
          <li>
            <Link href="/" className="flex group relative cursor-pointer px-4 text-2xl">
              <span>Home</span>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>

          {/* Media Kit Dropdown */}
          <li className="relative group flex items-center px-4">
            <button
              className="@apply inline-flex items-center !hover:text-gray-700 transition-all duration-300 text-2xl"
              onClick={() => handleDropdownToggle("media-kit")}
            >
              Media Kit
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeDropdown === "media-kit" && (
              <ul className="absolute top-full left-0 mt-2 w-32 bg-white text-black shadow-lg z-10">
                <li className="hover:bg-gray-200">
                  <Link href="/film_media_kit" className="block px-3 py-2 text-center">
                    Film
                  </Link>
                </li>
                
                <li className="hover:bg-gray-200">
                  <Link href="/tech_media_kit" className="block px-3 py-2 text-center">
                    Tech
                  </Link>
                  
                </li>
              </ul>
              
            )}
            
          </li>
          

          {/* Careers Dropdown */}
          <li className="relative group flex items-center px-4">
            <button
              className="inline-flex items-center !hover:text-gray-700 transition-all duration-300 text-2xl"
              onClick={() => handleDropdownToggle("careers")}
            >
              Careers
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeDropdown === "careers" && (
              <ul className="absolute top-full left-0 mt-2 w-32 bg-white text-black shadow-lg z-10">
                <li className="hover:bg-gray-200">
                  <Link href="/internships" className="block px-3 py-2 text-center">
                    Internships
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="/tech" className="block px-3 py-2 text-center">
                    Tech
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="/film" className="block px-3 py-2 text-center">
                    Film
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Links */}
          <li>
            <Link href="/sponsor" className="flex cursor-pointer relative group px-4 text-2xl">
              <span>Ad Sponsor</span>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex cursor-pointer relative group px-4 text-2xl">
              <span>Apply</span>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu (hidden on desktop) */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="md:hidden flex items-center space-x-2"
        >
          <span className="text-white text-3xl">Menu</span>
        </button>
      </div>

      {/* Mobile Dropdown (hidden on desktop) */}
      {mobileNavOpen && (
        <ul className="md:hidden bg-black text-white text-lg p-4 text-center">
          <li>
            <Link href="/" className="block px-4 py-2 text-3xl hover:bg-gray-500">Home</Link>
          </li>
          {/* Careers Dropdown (Mobile) */}
<li className="relative group">
  <button
    className="inline-flex items-center px-4 py-2 justify-center flex !hover:text-gray-500 w-full transition-all duration-300 py-2 text-3xl"
    onClick={() => handleDropdownToggle("careers")}
  >
    Careers
    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  {activeDropdown === "careers" && (
    <ul className="mt-2 bg-white text-black shadow-lg z-10">
      <li className="hover:bg-gray-200 ">
        <Link href="/internships" className="block px-3 py-2 text-2xl">
          Internships
        </Link>
      </li>
      <li className="hover:bg-gray-200">
        <Link href="/tech" className="block px-3 py-2 text-2xl">
          Tech
        </Link>
      </li>
      <li className="hover:bg-gray-200">
        <Link href="/film" className="block px-3 py-2 text-2xl">
          Film
        </Link>
      </li>
    </ul>
  )}
</li>

          <li className="relative group">
            <button
              className="inline-flex flex justify-center w-full items-center px-4 py-2 !hover:text-gray-500 text-3xl"
              onClick={() => handleDropdownToggle("media-kit-mobile")}
            >
              Media Kit
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeDropdown === "media-kit-mobile" && (
              <ul className="bg-white text-black shadow-lg z-10">
      <li className="hover:bg-gray-200">
      <Link href="/film_media_kit" className="block px-4 py-2 text-2xl">Film</Link>
                </li>
                <li className="hover:bg-gray-200">
      <Link href="/tech_media_kit" className="block px-4 py-2 text-2xl">Tech</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/sponsor" className="block hover:bg-gray-500 px-4 py-2 text-3xl">Ad Sponsor</Link>
          </li>
          <li>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-500 text-3xl">Apply</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

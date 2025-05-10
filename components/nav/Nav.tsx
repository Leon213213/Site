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
          <Image width={100} height={100} src="/img/logo/logo.png" alt="logo" />
        </Link>

        {/* Mobile Logo (hidden on desktop) */}
        <Link href="/" className="flex md:hidden items-center">
          <Image width={50} height={50} src="/img/logo/logo.png" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center text-lg px-0 p-4 w-full md:w-auto bg-black md:bg-transparent">
          <li>
            <Link href="/" className="flex group relative cursor-pointer px-4 text-2xl">
              <span>Home</span>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex group relative cursor-pointer px-4 text-2xl">
              <span>About</span>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-700 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex group relative cursor-pointer px-4 text-2xl">
              <span>Contact</span>
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
          <li>
            <Link href="/about" className="block px-4 py-2 text-3xl hover:bg-gray-500">About</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

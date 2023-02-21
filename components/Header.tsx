import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";
import PageLinks from "./PageLinks";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-200 grid grid-cols-2">
      <Logo />
      <PageLinks />
      <nav
        className="ml-auto my-auto p-2 cursor-pointer md:hidden lg:hidden xl:hidden 2xl:hidden"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span hidden={dropdownOpen}>
          <FaBars color="black" size={30} />
        </span>
        <span hidden={!dropdownOpen}>
          <FaRegWindowClose color="black" size={30} />
        </span>
      </nav>
      {dropdownOpen && (
        <div
          className="grid grid-cols-1 grid-rows-3 gap-3 md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={() => setDropdownOpen(false)}
        >
          <Link
            className="text-black text-left text-lg font-semibold px-2 mr-auto cursor-pointer hover:translate-x-1 hover:text-pink-700/80"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-black text-left text-lg font-semibold px-2 mr-auto cursor-pointer hover:translate-x-1 hover:text-pink-700/80"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-black text-left text-lg font-semibold px-2 mr-auto cursor-pointer hover:translate-x-1 hover:text-pink-700/80"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;

import Image from "next/image";
import React, { useEffect } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let logoWidth = 120;
  useEffect(() => {
    dynamicWidth;
  }, [logoWidth]);

  const dynamicWidth = () => {
    if (typeof window !== "undefined") {
      window.innerWidth <= 767 ? (logoWidth = 120) : (logoWidth = 200);
    }
    return logoWidth;
  };

  return (
    <header className="bg-gray-200 grid grid-cols-2">
      <Image
        alt="logo img"
        src="/logo-placeholder.svg"
        width={dynamicWidth()}
        height={60}
        className="p-2"
      />
      <nav
        className="ml-auto my-auto p-2 cursor-pointer"
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
          className="grid grid-cols-1 grid-rows-3 gap-3"
          onClick={() => setDropdownOpen(false)}
        >
          <Link
            className="text-black text-left text-lg font-semibold px-2 mr-auto cursor-pointer hover:translate-x-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-black text-left text-lg font-semibold px-2 mr-auto cursor-pointer hover:translate-x-1"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-black text-left text-lg font-semibold px-2 mr-auto cursor-pointer hover:translate-x-1"
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

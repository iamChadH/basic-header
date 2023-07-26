import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";
import PageLinks from "./PageLinks";

const Styles = {
  header: "bg-gray-200 grid grid-cols-2",
  nav: "ml-auto my-auto p-2 cursor-pointer md:hidden lg:hidden xl:hidden 2xl:hidden",
  ddOpen: "grid grid-cols-1 grid-rows-3 gap-3 md:hidden lg:hidden xl:hidden 2xl:hidden",
  links: "text-black text-left text-lg font-semibold px-2 mr-auto cursor-pointer hover:translate-x-1 hover:text-pink-700/80"
}

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={Styles.header}>
      <Logo />
      <PageLinks />
      <nav
        className={Styles.nav}
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
          className={Styles.ddOpen}
          onClick={() => setDropdownOpen(false)}
        >
          <Link
            className={Styles.links}
            href="/"
          >
            Home
          </Link>
          <Link
            className={Styles.links}
            href="/about"
          >
            About
          </Link>
          <Link
            className={Styles.links}
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

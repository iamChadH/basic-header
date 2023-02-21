import React from "react";
import Link from "next/link";
import Links from "../helpers/Links";

const PageLinks = () => {
  return (
    <nav className="flex justify-end sm:hidden">
      <div className="grid grid-cols-3 gap-4 mr-3">
        {Links.map((link, i) => (
          <Link
            key={i}
            className="text-black font-semibold my-auto cursor-pointer hover:text-pink-700/80"
            href={"/" + link.toLowerCase()}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default PageLinks;

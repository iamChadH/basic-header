import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo img"
      src="/logo-placeholder.svg"
      width={160}
      height={60}
      className="p-2"
    />
  );
};

export default Logo;

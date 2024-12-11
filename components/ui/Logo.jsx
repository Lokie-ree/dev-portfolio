"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/assets/icon.png"
        alt="Site Logo"
        width={44}
        height={44}
        className="w-12 h-12 md:w-16 md:h-16 object-contain hover:scale-105 transition-transform"
      />
    </Link>
  );
};

export default Logo;

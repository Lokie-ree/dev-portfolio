"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-label="Home">
      <img
        src="/assets/logo.png"
        alt="Site Logo"
        className="w-8 h-8 object-contain hover:scale-105 transition-transform"
      />
    </Link>
  );
};

export default Logo;

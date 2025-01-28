"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-label="Home">
      <img
        src="/assets/logo.png"
        alt="Site Logo"
        className="size-8 sm:size-9 object-contain hover:scale-105 transition-transform"
      />
    </Link>
  );
};

export default Logo;

"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

const DesktopMenu = () => {
  return (
    <ul className="hidden md:flex space-x-10">
      {navLinks.map(({ path, title }, index) => (
        <li key={index}>
          <Link
            href={path}
            className="text-md lg:text-lg hover:text-secondary nav-link transition-colors"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;

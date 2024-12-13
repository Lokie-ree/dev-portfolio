"use client";

import Link from "next/link";
import { desktopLinks } from "@/utils/constants";

const DesktopMenu = () => {
  return (
    <ul className="hidden md:flex space-x-10">
      {desktopLinks.map(({ path, title }, index) => (
        <li key={index} className="flex items-center space-x-2 hover:scale-110">
          <Link
            href={path}
            aria-label={`Navigate to ${title}`}
            className="text-sm lg:text-md font-medium hover:text-accent transition-colors duration-300"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;

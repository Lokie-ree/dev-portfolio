"use client";

import Link from "next/link";
import Logo from "./Logo";
import { footerLinks } from "@/utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Secondary Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                aria-label={link.title}
                className="link no-underline hover:text-primary text-sm mb-4"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Logo and Copyright */}
          <div className="flex items-center gap-2">
            <Logo />
            <p className="text-xs font-medium">
              Randall LaPoint, Jr. &copy; {year} - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

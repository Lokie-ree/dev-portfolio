"use client";

import Link from "next/link";
import Logo from "./Logo";
import { footerLinks } from "@/utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-t-primary text-base-content p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Secondary Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                aria-label={link.title}
                className="link link-secondary text-sm mb-4"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Logo and Copyright */}
          <div className="flex items-center">
            <Logo />
            <p className="text-xs font-light">
              &copy; {year} Randall LaPoint, Jr. - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

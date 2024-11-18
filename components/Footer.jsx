"use client";

import React from "react";
import { socialButtons } from "@/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center text-gray-200 p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {socialButtons.map((button) => (
          <Link key={button.id} href={button.href} className="rounded-xl">
            <button.icon className="text-blue-500 hover:text-blue-200 size-12" />
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;

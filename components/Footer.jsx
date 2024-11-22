"use client";

import React from "react";
import { socialButtons } from "@/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center text-gray-300 p-4">
      <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
        {socialButtons.map((button) => (
          <Link key={button.id} href={button.href} className="rounded-xl">
            <button.icon className="text-primary hover-color_scale size-10" />
          </Link>
        ))}
      </nav>
      <aside className="grid-flow-col items-center">
        <p>Copyright {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;

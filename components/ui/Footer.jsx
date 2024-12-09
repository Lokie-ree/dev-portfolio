"use client";

import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-4">
      <aside className="flex items-center justify-center">
        <Logo />
        <p>Copyright {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;

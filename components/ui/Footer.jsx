"use client";

import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-4">
      <aside className="flex items-center justify-center">
        <Logo />
        <p className="text-sm">
          Copyright {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

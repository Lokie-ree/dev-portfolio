"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="nav-container">
      <div className="nav-desktop_menu">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="nav-desktop-links_li">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={toggleNav} className="nav-toggle_btn">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav} className="text-4xl">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

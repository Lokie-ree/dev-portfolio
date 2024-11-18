"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { navLinks } from "@/utils/constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);

  return (
    <nav className="nav-container">
      {/* Desktop Navigation */}
      <div className="nav-desktop_menu ">
        <ul className="flex space-x-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="nav-desktop-links_li text-xl  hover:text-blue-500 hover:scale-125"
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Navigation Toggle */}
      <div
        onClick={toggleNav}
        aria-expanded={nav}
        aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
        className="nav-toggle_btn hover:border-blue-300 hover:text-blue-500 hover:scale-125"
      >
        {nav ? <MdClose size={24} /> : <MdMenu size={24} />}
      </div>
      {/* Mobile Navigation */}
      {nav && (
        <motion.div
          className={`fixed left-0 top-0 w-full h-full bg-black/90 backdrop-blur-3xl flex flex-col justify-center items-center transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="space-y-6 flex flex-col justify-center items-center text-2xl text-gray-300">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={closeNav}
                  className="hover:text-3xl hover:scale-110 transition-transform duration-200 hover:text-blue-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { TOP_COLORS } from "@/utils/constants";
import { navLinks } from "@/utils/constants";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const color = useMotionValue(TOP_COLORS[0]);

  useEffect(() => {
    animate(color, TOP_COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`1px solid ${color}`;

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="nav-container">
      <div className="nav-desktop_menu ">
        <motion.ul
          className="flex flex-row p-2 space-x-8 rounded-full"
          style={{ border }}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="nav-desktop-links_li rounded-full p-2">
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        onClick={toggleNav}
        className="nav-toggle_btn border-2"
        style={{ border }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {nav ? <MdClose size={30} /> : <MdMenu size={30} />}
      </motion.div>
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-3xl hover:text-5xl hover:font-bold hover:text-blue-500"
              >
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

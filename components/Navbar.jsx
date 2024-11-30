"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { navLinks, socialButtons } from "@/utils/constants";
import { motion } from "framer-motion";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);

  return (
    <nav className="z-50 fixed flex justify-center w-full font-bold">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center w-full px-8 p-8">
        <ul className="flex space-x-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="transform transition-all duration-300 ease-in-out text-2xl hover-color_scale"
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          <ThemeController />
        </div>
      </div>
      {/* Mobile Navigation Toggle */}
      <div
        onClick={toggleNav}
        aria-expanded={nav}
        aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
        className="md:hidden bg-primary text-primary-content absolute top-4 right-4 rounded-full z-50 p-4"
      >
        {nav ? <MdClose size={24} /> : <MdMenu size={24} />}
      </div>
      {/* Mobile Navigation */}
      {nav && (
        <motion.div
          className={`fixed left-0 top-0 w-full h-full bg-neutral backdrop-blur-3xl flex flex-col justify-center items-center transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="space-y-6 flex flex-col justify-center items-center text-neutral-content text-2xl sm:text-3xl mb-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={closeNav}
                  className="hover:text-3xl hover:text-secondary hover:scale-125 transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <nav className="grid grid-flow-row gap-4 mt-4">
            {socialButtons.map((button) => (
              <Link key={button.id} href={button.href} className="btn btn-primary">
                <button.icon className="size-12" />
              </Link>
            ))}
            <ThemeController />
          </nav>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

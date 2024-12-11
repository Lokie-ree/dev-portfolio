"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { navLinks, socialButtons } from "@/utils/constants";
import { motion } from "framer-motion";
import ThemeController from "./ThemeController";
import SocialButtons from "./SocialButtons";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);

  return (
    <nav className="z-50 fixed flex justify-between items-center w-full px-4 lg:px-8 py-4 backdrop-blur-md bg-gradient-to-b from-base-100 via-base-200/90 to-transparent shadow-md">
      {/* Left: Logo */}
      <Logo />

      {/* Center: Desktop Navigation */}
      <DesktopMenu />

      {/* Right: Theme Controller and Mobile Menu Toggle */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:block">
          <ThemeController />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleNav}
        aria-expanded={nav}
        aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
        className="md:hidden bg-base-100 border border-primary rounded-full p-3 shadow-sm hover:shadow-lg transition-transform"
      >
        {nav ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>
      {/* Mobile Menu */}
      <MobileMenu isOpen={nav} closeMenu={closeNav} />
    </nav>
  );
};

export default Navbar;

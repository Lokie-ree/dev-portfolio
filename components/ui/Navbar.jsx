"use client";

import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import ThemeController from "./ThemeController";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);

  return (
    <nav className="z-50 fixed flex justify-between items-center w-full px-4 lg:px-8 py-4 bg-gradient-to-b from-base-100 via-base-200/90 to-transparent shadow-md">
      <div className="container-width max-w-5xl mx-auto flex w-full justify-between items-center">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop Navigation */}
        <DesktopMenu />

        {/* Right: Theme Controller and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <ThemeController />
          </div>
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleNav}
            aria-expanded={nav}
            aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden z-[100] bg-base-100 border border-primary rounded-xl p-1 shadow-sm hover:shadow-lg transition-transform"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center items-center"
            >
              {nav ? <MdClose size={24} /> : <MdMenu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu isOpen={nav} closeMenu={closeNav} />
    </nav>
  );
};

export default Navbar;

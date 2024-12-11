"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import ThemeController from "./ThemeController";
import { navLinks, socialButtons } from "@/utils/constants";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <motion.div
      className={`fixed inset-0 bg-base-300/90 z-50 backdrop-blur-3xl flex flex-col justify-center items-center transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Navigation Links */}
      <ul className="mt-16 space-y-6 text-center text-xl sm:text-2xl">
        {navLinks.map(({ path, title }, index) => (
          <li key={index}>
            <Link
              href={path}
              onClick={closeMenu}
              className="hover:text-primary hover:scale-110 transition-transform duration-300"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Buttons and Theme Controller */}
      <div className="mt-8 flex flex-col items-center space-y-4">
        <SocialButtons buttons={socialButtons} iconClass="w-8 h-8" />
        <ThemeController />
      </div>
    </motion.div>
  );
};

export default MobileMenu;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import ThemeController from "./ThemeController";
import { mobileLinks, socialButtons } from "@/utils/constants";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 mobile-menu-bg bg-base-100 backdrop-blur-lg z-50 flex flex-col justify-center items-center"
    >
      {/* Navigation Links */}
      <ul className="space-y-6 text-center text-xl">
        {mobileLinks.map(({ path, title }, index) => (
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
      <div className="mt-10 flex flex-col items-center space-y-4">
        <SocialButtons buttons={socialButtons} iconClass="w-8 h-8" />
        <ThemeController />
      </div>
    </motion.div>
  );
};

export default MobileMenu;

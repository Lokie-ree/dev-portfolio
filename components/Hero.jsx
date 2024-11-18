"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  useMotionValue,
  useMotionTemplate,
  motion,
  animate,
} from "framer-motion";
import {
  TOP_COLORS,
  backgroundImage,
  border,
  boxShadow,
} from "@/utils/constants";

const Hero = () => {
  const color = useMotionValue(TOP_COLORS[0]);

  useEffect(() => {
    animate(color, TOP_COLORS, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section style={{ backgroundImage }} className="hero-motion_section">
      <div className="hero-container mt-2 md:mt-8">
        <h1 className="hero-lead">Hello, I am</h1>
        <h2 className="hero-name mt-2 md:mt-6 mb-2 md:mb-6">
          Randall LaPoint, Jr.
        </h2>
        <Image
          src="/assets/coding-avatar.jpg"
          alt="profile picture"
          width={250}
          height={250}
          className="rounded-full mt-2 mb-2 md:mb-8"
        />

        <p className=" max-w-xl text-xl md:text-2xl font-semibold mb-6">
          Fullstack Developer | Educator
        </p>
        <div className="flex justify-center items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="hero-motion_btn"
            style={{
              border,
              boxShadow,
            }}
          >
            Projects
          </motion.button>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="hero-motion_btn"
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

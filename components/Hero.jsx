"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { TOP_COLORS } from "@/utils/constants";
import {
  useMotionValue,
  useMotionTemplate,
  motion,
  animate,
  useReducedMotion,
} from "framer-motion";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const color = useMotionValue(TOP_COLORS[0]);

  useEffect(() => {
    if (!reduceMotion) {
      animate(color, TOP_COLORS, {
        ease: "easeInOut",
        duration: 15,
        repeat: Infinity,
        repeatType: "mirror",
      });
    }
  }, [reduceMotion, color]);

  const backgroundImage = useMotionTemplate`radial-gradient(170% 170% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const buttonMotion = {
    whileHover: { scale: 1.125 },
    whileTap: { scale: 0.985 },
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="hero-motion_section text-gray-200"
    >
      <div className="z-10 flex flex-col items-center mt-2 md:mt-8">
        <h1 className="text-blue-500 text-4xl md:text-6xl font-black">
          Hello, I am
        </h1>
        <h2 className="hero-name text-blue-600 text-3xl md:text-6xl mt-2 md:mt-6 mb-2 md:mb-6">
          Randall LaPoint, Jr.
        </h2>
        <Image
          src="/assets/coding-avatar.jpg"
          alt="Profile picture of avatar typing on a laptop"
          width={250}
          height={250}
          priority
          className="rounded-full mt-2 mb-2 md:mb-8"
        />

        <p className="text-gradient_light max-w-xl text-2xl md:text-4xl text-center font-semibold mb-6 mt-3">
          Full-Stack Developer
        </p>
        <div className="flex justify-center items-center gap-6">
          <button
            className="btn btn-primary hover-btn"
            aria-label="View my projects"
          >
            Projects
          </button>
          <button className="btn btn-primary hover-btn" aria-label="Contact me">
            Contact
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

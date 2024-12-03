"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialButtons } from "@/utils/constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative grid min-h-screen py-20 lg:py-24 text-base-content place-content-center overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center mt-2 md:mt-8">
        <h1 className="text-primary text-4xl md:text-6xl font-black">
          Hello, I am
        </h1>
        <h2 className="max-w-3xl text-base-content bg-clip-text font-black leading-tight text-3xl md:text-6xl mt-2 md:mt-6 mb-2 md:mb-6">
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

        <p className="text-base-content max-w-xl text-2xl md:text-4xl text-center font-semibold mb-6 mt-3">
          Full-Stack Developer
        </p>

        <div className="flex justify-center items-center gap-6">
          <Link href="#projects" passHref>
            <button
              className="btn btn-accent hover:scale-105 hover:bg-secondary transition-all duration-300 rounded-full"
              aria-label="View my projects"
            >
              Projects
            </button>
          </Link>
          <Link href="#contact" passHref>
            <button
              className="btn btn-accent hover:scale-105 hover:bg-secondary transition-all duration-300 rounded-full"
              aria-label="Contact me"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

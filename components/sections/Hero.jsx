"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative hero-bg grid min-h-screen py-20 lg:py-24 text-base-content bg-base-100 place-content-center overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center mt-2 md:mt-8">
        <h1 className="text-primary fade-in text-4xl md:text-6xl font-extrabold">
          Hello, I am
        </h1>
        <h2 className="max-w-3xl fade-in font-semibold leading-tight text-3xl md:text-6xl mt-2 md:mt-6 mb-2 md:mb-6">
          Randall LaPoint, Jr.
        </h2>
        <Image
          src="/assets/coding-avatar.jpg"
          alt="Profile picture of avatar typing on a laptop"
          width={250}
          height={250}
          priority
          className="rounded-full fade-in mt-2 mb-2 md:mb-8"
        />

        <p className="max-w-xl text-2xl md:text-4xl text-center font-normal mb-6 mt-3">
          Full-Stack Developer
        </p>

        <div className="flex justify-center items-center gap-6">
          <Link href="#projects" passHref>
            <button
              className="cta-btn"
              aria-label="Navigate to Projects section"
            >
              Projects
            </button>
          </Link>
          <Link href="#contact" passHref>
            <button
              className="cta-btn"
              aria-label="Navigate to Contact section"
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
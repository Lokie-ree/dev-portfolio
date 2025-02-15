"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Screen } from "@/components/layout";
import { FadeIn } from "@/components/animations/MotionWrapper";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <Screen className="hero-bg overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <FadeIn>
              <h1 className="text-primary text-3xl md:text-5xl font-bold mb-6">
                Building Modern <br />
                Scalable Solutions
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-2xl md:text-3xl font-medium mb-2 text-base-content/90">
                Randall LaPoint, Jr.
              </p>
              <p className="text-xl md:text-2xl mb-8 font-medium">
                Full-Stack Developer
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/#projects"
                  className="btn btn-secondary btn-md sm:btn-lg group"
                >
                  See My Work
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/#contact"
                  className="btn btn-ghost btn-md sm:btn-lg"
                >
                  Let's Connect
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Avatar */}
          <FadeIn className="order-1 lg:order-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
                <Image
                  src="/assets/coding-avatar.jpg"
                  alt="Profile picture of Randall LaPoint Jr."
                  fill
                  priority
                  className="rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </Screen>
  );
};

export default Hero;

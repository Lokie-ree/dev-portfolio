"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { TOP_COLORS } from "@/utils/constants";
import { projects } from "@/utils/constants";

const Portfolio = () => {
  const color = useMotionValue(TOP_COLORS[0]);

  useEffect(() => {
    animate(color, TOP_COLORS, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(165% 165% at 50% 0%, #000 50%, ${color})`;

  return (
    <section id="portfolio" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-10">
          Selected <span className="text-blue-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl rounded-b-xl"
            >
              {/* Project Image */}
              <figure className="h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </figure>
              {/* Project Details */}
              <motion.div className="card-body" style={{ backgroundImage }}>
                <h2 className="card-title text-blue-500">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Live Project
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

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

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-gray-900 text-white"
      style={{ backgroundImage }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-10">
          Selected <span className="text-blue-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card bg-base-100 shadow-xl">
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
              <div className="card-body">
                <h2 className="card-title text-blue-500">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="card-actions">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

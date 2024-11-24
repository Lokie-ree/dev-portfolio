"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/utils/constants";
import { motion } from "framer-motion";

const Portfolio = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16 text-gray-200 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl text-gray-200 font-bold mb-8 text-center">
          Projects
        </h2>
        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card bg-gray-700 shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
            >
              {/* Project Image */}
              <figure className="h-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </figure>

              {/* Project Details */}
              <div className="card-body p-6">
                <h2 className="card-title text-blue-300 text-xl sm:text-2xl font-bold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 font-thin">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className=" flex items-center gap-2 px-1 py-3 text-md"
                    >
                      <tech.icon
                        className="w-8 h-8"
                        style={{ color: tech.color }}
                      />
                    </span>
                  ))}
                </div>

                <div className="flex">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-gray-800 w-full"
                  >
                    View Live Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

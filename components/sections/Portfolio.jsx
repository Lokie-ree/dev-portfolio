"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/utils/constants";

const Portfolio = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleFlip = (id) => {
    setFlippedCard((prev) => (prev === id ? null : id)); // Toggle flipping state
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-24 portfolio-bg text-base-content"
    >
      <div className="container max-w-4xl mx-auto px-3">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Projects
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="perspective max-w-md h-64 relative"
              aria-label={`Project: ${project.title}`}
              onClick={() => toggleFlip(project.id)}
            >
              {/* Inner Card */}
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCard === project.id ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden">
                  <figure className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      aria-hidden="true"
                    />
                  </figure>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-base-100 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl sm:text-2xl text-secondary font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {project.description}
                  </p>
                  {/* Tech Stack and Button */}
                  <div className="flex items-center justify-between ">
                    <div className="flex gap-x-2">
                      {project.techStack.map((tech, index) => (
                        <tech.icon
                          key={index}
                          className="w-4 h-4"
                          style={{ color: tech.color }}
                        />
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

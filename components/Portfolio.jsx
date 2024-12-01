"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/utils/constants";

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard((prev) => (prev === id ? null : id)); // Toggle card on click
  };

  return (
    <section id="projects" className="py-16 text-base-content">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-12">
          Projects
        </h2>
        {/* Flexbox Layout */}
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center p-4 bg-base-100 bg-gradient-to-br from-white/10 to-transparent rounded-xl shadow-xl w-full sm:w-[48%] lg:w-[30%] transition-transform duration-300 hover:scale-105"
              onClick={() => toggleCard(project.id)}
            >
              {/* Project Image */}
              <div className="w-full h-52 overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Project Details */}
              <div className="flex flex-col items-center justify-center mt-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <tech.icon
                        className="w-5 h-5"
                        style={{ color: tech.color }}
                      />
                    </span>
                  ))}
                </div>
              </div>

              {/* Conditional Content */}
             
                <div className={`mt-4 md:block ${activeCard === project.id ? "block" : "hidden"}`}>
                  <p className="text-base-content mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent text-accent-content w-full"
                  >
                    View Live Project
                  </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

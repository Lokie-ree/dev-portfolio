"use client";

import { useState } from "react";
import { projects } from "@/utils/constants";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Link from "next/link";

const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => setSelectedProject(null);

  return (
    <>
      {/* Carousel */}
      <div className="flex justify-center items-center px-4">
        <div className="carousel w-full overflow-hidden">
          {projects.map((project, index) => (
            <div
              id={`item${index + 1}`}
              key={project.id}
              className="carousel-item w-full max-w-md"
            >
              <ProjectCard
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Buttons */}
      <div className="flex w-full justify-center gap-2 py-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className="btn btn-xs"
            onClick={() => {
              document
                .querySelectorAll(".carousel-item")
                [index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProjectCarousel;

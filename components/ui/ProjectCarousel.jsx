"use client";

import { useState } from "react";
import { projects } from "@/utils/constants";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const totalProjects = projects.length;

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalProjects) % totalProjects);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalProjects);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex items-center justify-center px-4">
      <section className="card card-compact w-full sm:w-1/2 bg-base-100 shadow-xl rounded-xl">
        <div className="card-body">
          <div className="carousel relative rounded-box shadow-xl">
            {/* Carousel Item */}
            <div className="carousel-item w-full">
              <ProjectCard
                project={projects[currentIndex]}
                onViewDetails={() => handleViewDetails(projects[currentIndex])}
              />
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-accent btn-sm opacity-75 hover:opacity-100 transition-all duration-300"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <IoChevronBackCircle size={24} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-accent btn-sm opacity-75 hover:opacity-100 transition-all duration-300"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <IoChevronForwardCircle size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`mx-1 mt-1 md:mx-2 md:mt-3 w-4 h-4 md:w-6 md:h-6 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-neutral"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectCarousel;

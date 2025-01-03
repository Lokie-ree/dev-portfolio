"use client";

import { useState } from "react";
import { projects } from "@/utils/constants";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useCarouselAutoplay } from "@/utils/carousel";

const ProjectCarousel = () => {
  const totalProjects = projects.length;
  const [selectedProject, setSelectedProject] = useState(null);

  const [currentIndex, setCurrentIndex, hoverHandlers] =
    useCarouselAutoplay(totalProjects);

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
    <div
      {...hoverHandlers}
      className="flex items-center justify-center px-4 sm:px-12"
    >
      <section className="card card-compact card-hover w-full max-w-xl bg-base-100 shadow-xl rounded-xl mx-auto">
        <div className="card-body">
          <div className="carousel relative w-full overflow-hidden rounded-box shadow-xl">
            {/* Carousel Item */}
            <div className="carousel-item w-full max-w-lg mx-auto">
              <ProjectCard
                project={projects[currentIndex]}
                onViewDetails={() => handleViewDetails(projects[currentIndex])}
              />
            </div>
          </div>

          {/* Controls: Buttons & Dots */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:px-8 md:px-12">
            {/* Previous Button */}
            <button
              className="btn btn-circle btn-primary btn-sm opacity-75 hover:opacity-100 transition-all duration-300"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <IoChevronBackCircle size={24} />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-neutral"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Next Button */}
            <button
              className="btn btn-circle btn-primary btn-sm opacity-75 hover:opacity-100 transition-all duration-300"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <IoChevronForwardCircle size={24} />
            </button>
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

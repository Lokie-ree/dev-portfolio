"use client";

import { useState } from "react";
import { projects } from "@/utils/constants";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useCarouselAutoplay } from "@/utils/carousel";
import { motion, AnimatePresence } from "framer-motion";

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
    <div {...hoverHandlers} className="relative w-full max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="carousel-item"
        >
          <ProjectCard
            project={projects[currentIndex]}
            onViewDetails={() => handleViewDetails(projects[currentIndex])}
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

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
  );
};

export default ProjectCarousel;

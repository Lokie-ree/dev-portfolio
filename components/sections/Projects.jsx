"use client";

import ProjectCarousel from "../ui/ProjectCarousel";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 lg:py-24 border-t border-t-primary portfolio-bg text-base-content"
    >
      <div className="container max-w-4xl px-4 mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Projects
        </h2>
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default Projects;

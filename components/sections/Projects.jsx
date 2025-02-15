"use client";

import { Section } from "@/components/layout";
import dynamic from "next/dynamic";
import LoadingSpinner from "../ui/LoadingSpinner";

const ProjectCarousel = dynamic(() => import("../ui/ProjectCarousel"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const Projects = () => {
  return (
    <Section id="projects" className="section-bg">
      <h2 className="heading-2 text-center mb-12">Projects</h2>
      <ProjectCarousel />
    </Section>
  );
};

export default Projects;

import React from "react";
import Image from "next/image";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <>
      <div className="card card-compact shadow-md w-full aspect-[4/3] mx-auto">
        <figure className="relative h-full">
          <Image
            src={project.image}
            alt={project.title}
        
            objectFit="cover"
            className="rounded-xl"
            width={500}
            height={500}
          />
        </figure>

        <div className="card-body flex flex-col items-center text-center">
          <h2 className="card-title text-primary text-xl sm:text-2xl">
            {project.title}
          </h2>
          <div className="flex justify-center gap-4 sm:mt-2">
            {project.techStack.map((tech, index) => (
              <tech.icon
                key={index}
                className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-4"
                style={{ color: tech.color }}
              />
            ))}
          </div>
          <div className="card-actions mt-2">
            <button className="btn btn-wide btn-primary" onClick={onViewDetails}>
              More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

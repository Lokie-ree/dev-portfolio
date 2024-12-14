import React from "react";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <>
      <div className="card card-compact h-[24rem] project-card shadow-md">
        <figure className="h-[14rem] w-full">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full rounded-t-md"
          />
        </figure>
        <div className="card-body flex flex-col items-center text-center p-4">
          <h2 className="card-title text-primary text-xl">{project.title}</h2>
          <div className="flex justify-center gap-4 mt-2">
            {project.techStack.map((tech, index) => (
              <tech.icon
                key={index}
                className="w-5 h-5"
                style={{ color: tech.color }}
              />
            ))}
          </div>
          <div className="card-actions mt-auto">
            <button className="btn btn-sm btn-primary" onClick={onViewDetails}>
              More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

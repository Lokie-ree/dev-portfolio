import React from "react";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <>
      <div className="carousel-item w-full max-w-md mx-auto">
        <div className="card card-compact h-[24rem] bg-gray-600 shadow-md">
          <figure className="h-[14rem] w-full">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title text-primary text-xl">{project.title}</h2>
            <div className="flex justify-center gap-4 mt-2">
              {project.techStack.map((tech, index) => (
                <tech.icon
                  key={index}
                  className="w-4 h-4"
                  style={{ color: tech.color }}
                />
              ))}
            </div>
            <div className="card-actions mt-auto">
              <button
                className="btn btn-sm btn-primary"
                onClick={onViewDetails}
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

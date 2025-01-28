import React from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div
      className="modal modal-open flex items-end justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="modal-box relative max-w-md bg-base-100 text-base-content shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle btn-secondary absolute right-5 top-5"
          onClick={onClose}
        >
          <MdClose />
        </button>
        <h3 className="font-bold text-lg text-primary text-center">{project.title}</h3>
        <p className="py-4 font-light">{project.description}</p>

        
        <div className="flex flex-row justify-center items-center gap-2 w-full">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm sm:btn-md"
          >
            Live Project 
          </Link>
          <Link
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm sm:btn-md"
          >
            Source Code
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          {project.techStack.map((tech, index) => (
            <tech.icon
              key={index}
              className="w-5 h-5"
              style={{ color: tech.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

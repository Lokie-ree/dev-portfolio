import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal modal-open" onClick={onClose}>
      <div
        className="modal-box relative max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          <MdClose />
        </button>
        <figure>
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full rounded-md"
          />
        </figure>
        <h3 className="font-bold text-xl text-primary mt-4">{project.title}</h3>
        <p className="py-4 font-medium">{project.description}</p>
        <div className="flex gap-4 mt-2">
          {project.techStack.map((tech, index) => (
            <tech.icon
              key={index}
              className="w-6 h-6"
              style={{ color: tech.color }}
            />
          ))}
        </div>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-md mt-6"
        >
          View Live Project <FaExternalLinkAlt className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectModal;

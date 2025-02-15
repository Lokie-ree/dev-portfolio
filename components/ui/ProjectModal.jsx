import { Container } from "@/components/layout";
import { FaLaptopCode, FaCode } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div
      className="modal modal-open flex items-end justify-center bg-black/50"
      onClick={onClose}
    >
      <div className="w-full max-w-lg mx-auto px-4">
        <Container className="modal-box relative bg-base-100 text-base-content shadow-xl">
          <button
            className="btn btn-sm btn-circle btn-secondary absolute right-5 top-5"
            onClick={onClose}
          >
            <MdClose />
          </button>
          <h3 className="heading-3 font-bold">{project.title}</h3>
          <p className="py-4 font-thin">{project.description}</p>

          <div className="flex gap-4 mt-2">
            {project.techStack.map((tech, index) => (
              <tech.icon
                key={index}
                className="w-5 h-5"
                style={{ color: tech.color }}
              />
            ))}
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              Live Project <FaLaptopCode className="ml-2 size-5" />
            </Link>
            <Link
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              Source Code <FaCode className="ml-2 size-5" />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProjectModal;

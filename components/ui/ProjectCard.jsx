import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="card card-compact shadow-md w-full max-w-2xl mx-auto aspect-[4/3]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => !isHovered && setIsHovered(!isHovered)}
    >
      <figure className="relative h-full">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </figure>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="card-body flex flex-col items-center justify-center text-center p-4 bg-base-100/80 backdrop-blur-sm absolute inset-0 rounded-xl"
          >
            <div className="flex flex-col items-center gap-4">
              <h2 className="card-title font-bold text-xl sm:text-2xl">
                {project.title}
              </h2>
              <div className="flex justify-center gap-4">
                {project.techStack.map((tech, index) => (
                  <tech.icon
                    key={index}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: tech.color }}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-sm btn-primary mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails();
                }}
              >
                More Details
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;

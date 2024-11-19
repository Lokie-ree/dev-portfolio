"use client";

import React from "react";
import { stackItems } from "../utils/constants";
import { motion } from "framer-motion";

const Stack = () => {
  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const textVariants = {
    hover: {
      scale: 1.1,
      color: "#60A5FA",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 bg-gray-950 text-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl text-gray-200 font-bold mb-8">
          Tech Stack
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChilden: 0.1,
              },
            },
          }}
        >
          {stackItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative flex flex-col items-center justify-center p-4 bg-white/10 rounded-3xl shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover="hover"
            >
              <motion.div
                className="mb-4 rounded-full p-6 flex items-center justify-center"
                style={{ backgroundColor: item.color }}
                aria-label={`Icon for ${item.name}`}
                variants={iconVariants}
              >
                <item.icon className="w-12 h-12 sm:w-20 sm:h-20 text-white" />
              </motion.div>
              <motion.p
                className="text-lg md:text-xl font-semibold text-gray-300"
                variants={textVariants}
              >
                {item.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;

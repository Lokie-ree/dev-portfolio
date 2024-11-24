"use client";

import React from "react";
import { stackItems } from "../utils/constants";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <section id="stack" className="py-16 bg-gray-800 text-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl text-gray-200 font-bold mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center gap-4"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                className="w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center"
                style={{ color: item.color }}
                variants={{
                  rest: { scale: 1 },
                  hover: {
                    scale: 1.2,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  },
                }}
              >
                <item.icon className="w-full h-full" />
              </motion.div>
              <motion.span
                className="text-lg font-semibold text-gray-300 opacity-0 mt-2"
                variants={{
                  rest: { opacity: 0, y: 10 },
                  hover: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                    },
                  },
                }}
              >
                {item.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

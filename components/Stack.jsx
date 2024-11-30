"use client";

import React from "react";
import { stackItems } from "../utils/constants";

const Stack = () => {
  return (
    <section id="stack" className="py-8 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl text-primary font-bold mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col mx-auto items-center justify-center w-32 h-32 sm:w-40 sm:h-40 gap-2 bg-gradient-to-br from-white/10 to-transparent bg-white/30 border border-white/20 rounded-full shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
                style={{ color: item.color }}
              >
                <item.icon className="w-full h-full" />
              </div>
              <span className="text-sm sm:text-md font-semibold text-base-content mt-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

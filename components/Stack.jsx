"use client";

import React from "react";
import { stackItems } from "../utils/constants";

const Stack = () => {
  return (
    <section id="stack" className="py-8 bg-base-100 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl text-primary font-bold mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-4 p-4 bg-white/30 rounded-3xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <div
                className="w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center"
                style={{ color: item.color }}
              >
                <item.icon className="w-full h-full" />
              </div>
              <span className="text-lg font-semibold text-base-content">
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

"use client";

import React from "react";
import { stackItems } from "../utils/constants";

const Stack = () => {
  return (
    <section id="tech-stack" className="py-20 lg:py-24 stack-bg text-base-content relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl text-base-content font-bold mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-base-100 group mx-auto items-center justify-center w-32 h-32 sm:w-40 sm:h-40 gap-2 bg-gradient-to-br from-white/10 to-transparent rounded-full shadow-xl card-hover"
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
                style={{ color: item.color }}
              >
                <item.icon className="w-full h-full" />
              </div>
              <span className="text-sm sm:text-md font-semibold text-base-content mt-2 group-hover:text-accent">
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

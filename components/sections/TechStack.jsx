"use client";

import React from "react";
import { stackItems } from "../../utils/constants";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-20 lg:py-24 border-t border-t-primary stack-bg text-base-content relative overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl text-base-content font-bold mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-12">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="tooltip tooltip-bottom tooltip-accent relative flex flex-col bg-base-100 group mx-auto items-center justify-center w-20 h-20 sm:w-28 sm:h-28 gap-2 bg-gradient-to-br from-white/10 to-transparent rounded-full shadow-xl card-hover"
              data-tip={item.name}
            >
              <div
                className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center"
                style={{ color: item.color }}
              >
                <item.icon className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

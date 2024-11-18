import React from "react";
import { stackItems } from "../utils/constants";

const Stack = () => {
  return (
    <section className="py-16 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl text-gray-200 font-bold mb-4 sm:mb-8 md:mb-10">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-1">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="mb-4 bg-white/10 rounded-full p-6">
                {React.createElement(item.icon, {
                  className: "w-8 h-8 sm:w-20 sm:h-20",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

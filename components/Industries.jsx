import React from "react";
import { industryLogos } from "@/utils/constants";

const Industries = () => {
  return (
    <div className="py-8 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {industryLogos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className=" p-0 md:p-4 rounded-full shadow-lg">
                {logo.icon}
              </div>
              <p className="text-xs font-medium text-gray-300">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;

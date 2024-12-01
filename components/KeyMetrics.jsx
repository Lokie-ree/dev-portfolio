import React from "react";
import { metrics } from "@/utils/constants";

const KeyMetrics = () => {
  return (
    <section className="py-8 relative overflow-hidden px-2">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 className="text-5xl md:text-6xl text-primary font-exo font-bold text-center mb-8">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="stat p-6 bg-base-100 bg-gradient-to-br from-white/10 to-transparent rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <span className="stat-value text-accent text-3xl sm:text-4xl">
                  {metric.value}
                </span>
              </div>
              <div className="stat-title flex items-center gap-3 text-secondary text-xl sm:text-2xl font-bold mb-2">
              <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                {metric.title}
              </div>
              <div className=" text-base-content text-md sm:text-lg">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;

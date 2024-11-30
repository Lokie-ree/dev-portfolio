import React from "react";
import { metrics } from "@/utils/constants";

const KeyMetrics = () => {
  return (
    <section className="py-16 bg-base-100 text-base-content">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl text-primary font-exo font-bold text-center mb-8">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="stat p-6 bg-white/30 rounded-3xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <span className="stat-value text-accent text-4xl sm:text-6xl">
                  {metric.value}
                </span>
              </div>
              <div className="stat-title flex items-center gap-4 text-secondary text-2xl sm:text-3xl font-bold mb-2">
                <metric.icon className="w-8 h-8 text-primary" />
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

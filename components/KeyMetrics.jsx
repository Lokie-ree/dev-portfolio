import React from "react";
import { metrics } from "@/utils/constants";

const KeyMetrics = () => {
  return (
    <section id="key-metrics" className="py-20 lg:py-24 relative overflow-hidden text-base-content">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Key Metrics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="stat card-style card-hover w-full sm:max-w-md"
            >
              <div className="stat-value flex items-center justify-between text-secondary text-2xl sm:text-3xl font-bold">
                {metric.value}
                <div className="stat-figure text-accent">
                  <metric.icon className="w-6 h-6 sm:w-10 sm:h-10" aria-hidden="true" />
                </div>
              </div>

              <div className="stat-title text-primary text-lg sm:text-2xl font-semibold sm:mt-2 sm:mb-2">
                {metric.title}
              </div>
              
              <div className="stat-desc text-sm sm:text-md text-base-content mt-1 truncate">
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

import React from "react";
import { metrics } from "@/utils/constants";

const KeyMetrics = () => {
  return (
    <section id="key-metrics" className="py-20 lg:py-24 metrics-bg relative overflow-hidden text-base-content">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="stat card-style card-hover w-full sm:max-w-md"
            >
              <div className="stat-value text-3xl sm:text-4xl flex items-center justify-between text-primary font-bold">
                {metric.value}
                <div className="stat-figure text-primary">
                  <metric.icon className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true" />
                </div>
              </div>

              <div className="stat-title text-2xl md:text-3xl text-secondary font-semibold sm:mt-2 sm:mb-2">
                {metric.title}
              </div>
              
              <div className="stat-desc text-lg text-base-content mt-1 truncate">
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

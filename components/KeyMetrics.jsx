import React from "react";
import { metrics } from "@/utils/constants";

const KeyMetrics = () => {
  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl text-primary font-exo font-bold text-center mb-8">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric) => (
            <div key={metric.id} className="stat bg-neutral rounded-lg p-6">
              <div className="flex items-center font-semibold gap-8 mb-4">
                <span className="stat-value text-accent text-4xl sm:text-5xl">
                  {metric.value}
                </span>
                <metric.icon className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
              </div>
              <div className="stat-title text-secondary text-2xl sm:text-3xl font-bold mb-2">
                {metric.title}
              </div>
              <div className=" text-neutral-content text-md sm:text-lg">
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

import React from "react";
import { metrics } from "@/utils/constants";

const KeyMetrics = () => {
  return (
    <section id="key-metrics" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl text-primary font-exo font-bold text-center mb-12">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="stat p-6 bg-base-100 group bg-gradient-to-br from-white/10 to-transparent rounded-2xl shadow-lg backdrop-blur-md card-hover"
            >
              <div className="mb-4">
                <span className="stat-value text-accent font-extrabold text-3xl sm:text-4xl">
                  {metric.value}
                </span>
              </div>
              <div className="stat-title flex items-center gap-3 text-xl sm:text-2xl text-base-content font-bold mb-2">
              <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-primary" />
              <h1 className="group-hover:text-secondary">{metric.title}</h1>
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

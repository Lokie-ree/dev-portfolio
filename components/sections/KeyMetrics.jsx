import React from "react";
import { metrics } from "@/utils/constants";
import { Section } from "@/components/layout";
import { FadeIn, StaggerChildren } from "@/components/animations/MotionWrapper";

const KeyMetrics = () => {
  return (
    <Section id="key-metrics" className="section-bg">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="heading-2 text-center mb-12">Key Metrics</h2>
        </FadeIn>
        <StaggerChildren>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.id} direction="up" delay={index * 0.1}>
                <div className="stat card-style card-hover w-full">
                  <div className="stat-value text-lg sm:text-xl md:text-2xl flex items-center justify-between text-accent font-bold">
                    {metric.value}
                    <div className="stat-figure text-primary">
                      <metric.icon
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className=" md:text-lg font-bold mt-2 mb-1">
                    {metric.title}
                  </div>
                  <div className="stat-desc text-sm md:text-base font-medium truncate">
                    {metric.description}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </Section>
  );
};

export default KeyMetrics;

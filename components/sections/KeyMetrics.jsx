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
                  <div className="stat-value text-lg sm:text-xl md:text-2xl flex items-center justify-between text-primary font-bold">
                    {metric.value}
                    <div className="stat-figure text-primary">
                      <metric.icon
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="stat-title text-base md:text-lg text-secondary font-semibold mt-2 mb-1">
                    {metric.title}
                  </div>
                  <div className="stat-desc text-sm md:text-base text-base-content/80 truncate">
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

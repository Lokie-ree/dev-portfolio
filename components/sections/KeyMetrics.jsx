import React from "react";
import { metrics } from "@/utils/constants";
import { Section } from "@/components/layout";
import { FadeIn, StaggerChildren } from "@/components/animations/MotionWrapper";

const KeyMetrics = () => {
  return (
    <Section id="key-metrics" className="section-bg px-2">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="heading-2 text-center mb-12">Key Metrics</h2>
        </FadeIn>
        <StaggerChildren>
          <div className="flex flex-col gap-6">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.id} direction="up" delay={index * 0.1}>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow bg-base-200 border border-base-300"
                >
                  <div className="collapse-title flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-primary">
                        <metric.icon className="text-lg sm:text-2xl" aria-hidden="true" />
                      </span>
                      <span className="text-sm sm:text-base font-medium">{metric.title}</span>
                    </div>
                    <span className="text-base sm:text-2xl font-extrabold text-accent">{metric.value}</span>
                  </div>
                  <div className="collapse-content">
                    <p className="text-sm sm:text-base font-thin">{metric.description}</p>
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

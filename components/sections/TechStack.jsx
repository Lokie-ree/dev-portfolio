"use client";

import { Section } from "@/components/layout";
import { stackItems } from "../../utils/constants";
import { FadeIn, StaggerChildren } from "@/components/animations/MotionWrapper";

const TechStack = () => {
  return (
    <Section id="tech-stack" className="section-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="heading-2 text-center mb-12">Tech Stack</h2>
        </FadeIn>
        <StaggerChildren>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
            {stackItems.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div
                  className="tooltip tooltip-bottom card-hover tooltip-accent relative flex flex-col bg-base-100 group mx-auto items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full shadow-xl"
                  data-tip={item.name}
                >
                  <div
                    className="size-8 sm:size-10 md:size-12 flex items-center justify-center"
                    style={{ color: item.color }}
                  >
                    <item.icon className="w-full h-full" />
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

export default TechStack;

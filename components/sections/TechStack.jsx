"use client";

import { Section } from "@/components/layout";
import { stackItems } from "../../utils/constants";
import { FadeIn, StaggerChildren } from "@/components/animations/MotionWrapper";

const TechStack = () => {
  return (
    <Section id="tech-stack" className="tech-bg relative overflow-hidden px-2">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="heading-2 text-center mb-12">Tech Stack</h2>
        </FadeIn>
        <StaggerChildren>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-12 md:gap-14">
            {stackItems.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div
                  className="tooltip tooltip-bottom text-sm font-light card-hover relative flex flex-col bg-base-100 group mx-auto items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full shadow-xl"
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

"use client";

import {
  ContactSection,
  Hero,
  KeyMetrics,
  Projects,
  Services,
  TechStack,
} from "@/components/sections";

export default function Home() {
  return (
    <div>
      {" "}
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <KeyMetrics />
      <ContactSection />
    </div>
  );
}

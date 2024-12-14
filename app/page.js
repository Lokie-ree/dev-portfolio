"use client";

import {
  ContactSection,
  Hero,
  KeyMetrics,
  Projects,
  Services,
  TechStack,
} from "@/components/sections";

import Dev from "@/components/sections/Dev";

export default function Home() {
  return (
    <div>
      {" "}
      <Hero />
      <Services />
      <Projects />
      <Dev />
      <TechStack />
      <KeyMetrics />
      <ContactSection />
    </div>
  );
}

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
    <main>
      {" "}
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <KeyMetrics />
      <ContactSection />
    </main>
  );
}

"use client";

import {
  ContactSection,
  Hero,
  KeyMetrics,
  Portfolio,
  Services,
  Stack,
} from "@/components/sections";

export default function Home() {
  return (
    <div>
      {" "}
      <Hero />
      <Services />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <ContactSection />
    </div>
  );
}

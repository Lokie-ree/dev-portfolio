"use client";

import { Suspense } from "react";
import {
  ContactSection,
  Hero,
  KeyMetrics,
  Projects,
  Services,
  TechStack,
} from "@/components/sections";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="loading loading-spinner loading-lg text-primary"></div>
  </div>
);

export default function Home() {
  return (
    <main className="bg-base-100">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="mt-8 sm:mt-0">
          <Hero />
        </div>
        <Services />
        <Projects />
        <TechStack />
        <KeyMetrics />
        <ContactSection />
      </Suspense>
    </main>
  );
}

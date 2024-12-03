import {
  ContactSection,
  Hero,
  KeyMetrics,
  Portfolio,
  Services,
  Stack,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-base-200">
      {" "}
      <Hero />
      <Services />
      <KeyMetrics />
      <Portfolio />
      <Stack />
      <ContactSection />
    </div>
  );
}

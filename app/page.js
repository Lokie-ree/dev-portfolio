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
      <KeyMetrics />
      <Portfolio />
      <Stack />
      <ContactSection />
    </div>
  );
}

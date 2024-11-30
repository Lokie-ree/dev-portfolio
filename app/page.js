import {
  Contact,
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
      <KeyMetrics />
      <Stack />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

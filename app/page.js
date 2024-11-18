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
    <>
      {" "}
      <Hero />
      <Stack />
      <Portfolio />
      <KeyMetrics />
      <Services />
      <Contact />
    </>
  );
}

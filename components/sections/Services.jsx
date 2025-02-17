import { Section } from "@/components/layout";
import { services } from "@/utils/constants";
import { FadeIn, StaggerChildren } from "@/components/animations/MotionWrapper";
import Image from "next/image";

const Services = () => {
  return (
    <Section id="services" className="section-bg px-2">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="heading-2 text-center mb-12 lg:mb-16">Services</h2>
        </FadeIn>
        <StaggerChildren>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <FadeIn key={service.id} direction="up">
                <div className="card card-compact card-style card-hover w-full">
                  <figure className="h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="rounded-t-lg w-full object-cover"
                    />
                  </figure>
                  <div className="card-body p-6">
                    <h2 className="card-title text-xl sm:text-2xl font-bold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-md font-light">
                      {service.description}
                    </p>
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

export default Services;

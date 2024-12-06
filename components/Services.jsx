import React from "react";
import { services } from "@/utils/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-24 text-base-content">
      <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 lg:mb-16">Services</h2>
        <div className="grid grid-cols-responsive gap-6">
          {services.map((service) => (
            <div className="card card-compact card-style card-hover w-full" key={service.id}>
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
              <h2 className="card-title text-xl sm:text-2xl font-bold text-primary mb-2">{service.title}</h2>
              <p className="text-sm sm:text-md">{service.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

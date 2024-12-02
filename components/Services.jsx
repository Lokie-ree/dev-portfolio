import React from "react";
import { services } from "@/utils/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-24 text-base-content">
      <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-12">Services</h2>
        <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 lg:grid-col-3 gap-8">
          {services.map((service) => (
            <div className="card card-compact bg-base-100 bg-gradient-to-br from-white/10 to-transparent w-full shadow-xl card-hover" key={service.id}>
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
              <h2 className="card-title text-lg sm:text-xl font-semibold text-secondary mb-2">{service.title}</h2>
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

import React from "react";
import { services } from "@/utils/constants";

const Services = () => {
  return (
    <section id="services" className="py-16 text-base-content">
      <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-12">Services</h2>
        <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div className="card card-compact bg-base-100 bg-gradient-to-br from-white/10 to-transparent w-full shadow-xl transition-transform duration-300 hover:scale-105" key={service.id}>
            <figure className="h-52">
              <img
                src={service.image}
                alt={service.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

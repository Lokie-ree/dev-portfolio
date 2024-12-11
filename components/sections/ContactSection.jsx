"use client";

import React from "react";
import ContactForm from "../ui/ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 lg:py-24 contact-bg text-base-content"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;

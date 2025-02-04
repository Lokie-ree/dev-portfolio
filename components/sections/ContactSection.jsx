"use client";

import React from "react";
import ContactForm from "../ui/ContactForm";
import SocialButtons from "../ui/SocialButtons";
import { socialButtons } from "@/utils/constants";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-12 lg:py-16 contact-bg border-t border-t-primary text-base-content"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="flex flex-col items-center justify-center gap-8">
          <ContactForm />
          <SocialButtons buttons={socialButtons} iconClass="size-8" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import React from "react";
import ContactForm from "./ContactForm";
import toast, {Toaster} from 'react-hot-toast';

const ContactSection = () => {
  const notifySuccess = () => toast.success("Message sent successfully!", {position: "bottom-center",});

  return (
    <section id="contact" className="background-base-100 py-20 lg:py-24 text-base-content">
      <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-12">
            Get in Touch
          </h2>
          <Toaster />
          <ContactForm />
        </div>
    </section>
  );
};

export default ContactSection;

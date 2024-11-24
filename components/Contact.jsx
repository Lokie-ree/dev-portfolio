"use client";

import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-base-200 max-w-[1200px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2>
            Get in <span className="text-accent">touch</span>
          </h2>
          <div className="glass p-8 rounded-2xl space-y-8">
            <div className="space-y-2">
              <p className="text-lg">Phone</p>
              <a
                href="tel:+9855189129"
                className="text-2xl lg:text-4xl hover:text-secondary font-semibold transition duration-300 flex items-center gap-2"
              >
                <span className="mr-3">
                  <FaPhoneVolume className="text-primary" />
                </span>
                (985) 518 - 9129
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg">Email</p>
              <a
                href="mailto:rplapointjr@gmail.com"
                className="text-2xl lg:text-4xl font-semibold hover:text-secondary transition duration-300 flex items-center gap-2"
              >
                <span className="mr-3">
                  <MdEmail className="text-primary" />
                </span>
                rplapointjr@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"></div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { Section } from "@/components/layout";
import ContactForm from "../ui/ContactForm";
import SocialButtons from "../ui/SocialButtons";
import { socialButtons } from "@/utils/constants";
import { FadeIn, SlideIn } from "@/components/animations/MotionWrapper";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <Section id="contact" className="section-bg">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="heading-2 text-center mb-12">Get in Touch</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <SlideIn direction="up">
            <ContactForm />
          </SlideIn>

          {/* Contact Info Card */}
          <FadeIn delay={0.2}>
            <div className="card card-style h-full">
              <div className="card-body">
                <h3 className="text-2xl font-bold text-center text-primary mb-4">
                  Let's Build Together
                </h3>

                {/* Contact Details */}
                <div className="space-y-6 mb-6">
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-accent text-xl" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:randall.lapoint.jr@gmail.com"
                        className="text-secondary hover:text-accent transition-colors"
                      >
                        rlapointjr@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdLocationOn className="text-accent text-xl" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-secondary">Baton Rouge, LA</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCode className="text-accent text-xl" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-secondary">Open to Opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center">
                  <SocialButtons
                    buttons={socialButtons}
                    iconClass="w-8 h-8 hover:text-accent transition-colors"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;

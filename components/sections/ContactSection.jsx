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
    <Section id="contact" className="contact-bg px-2">
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <SlideIn direction="up">
            <ContactForm />
          </SlideIn>

          {/* Contact Info Card */}
          <FadeIn delay={0.2}>
            <div className="card card-style h-full">
              <div className="card-body">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                  Let's Build Together
                </h3>

                {/* Contact Details */}
                <div className="space-y-6 mb-6">
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-secondary text-xl" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:randall.lapoint.jr@gmail.com"
                        className="font-light hover:text-primary transition-colors"
                      >
                        rlapointjr@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MdLocationOn className="text-secondary text-xl" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="font-light">Baton Rouge, LA</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCode className="text-secondary text-xl" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="font-light">Open to Opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center mt-2">
                  <SocialButtons
                    buttons={socialButtons}
                    iconClass="w-8 h-8 transition-colors"
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

"use client";

import React from "react";
import Form from "next/form";
import { handleContactForm } from "@/utils/serverActions";
import { MdOutlinePerson, MdOutlineEmail } from "react-icons/md";
import { socialButtons } from "@/utils/constants";
import toast from 'react-hot-toast';
import Link from "next/link";
import SocialButtons from "./SocialButtons";

const ContactForm = () => {
  return (
    <div className="card md:card-side gap-4">

      {/* Left Side: Form */}
      <div className="card-body bg-base-100 bg-gradient-to-br from-white/10 to-transparent rounded-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-base-content mb-6">Contact Me</h3>
        <Form
          className="space-y-6"
          action={async (formData) => {
            try {
              await handleContactForm(formData);
              notifySuccess();
            } catch (error) {
              toast.error("Failed to send the message. Please try again.");
            }
          }}
        >
          <label htmlFor="name" className="input input-bordered flex text-sm items-center rounded-xl shadow-sm gap-2 input-hover">
            <MdOutlinePerson />
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              className="grow outline-none"
              required
            />
          </label>
        
          <label htmlFor="email" className="input input-bordered flex text-sm items-center rounded-xl shadow-sm gap-2 input-hover">
            <MdOutlineEmail />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              className="grow outline-none"
              required
            />
          </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              aria-label="Message"
              className="textarea textarea-bordered w-full rounded-xl shadow-sm placeholder:text-gray-400 text-sm leading-relaxed input-hover outline-none"
              required
            ></textarea>
          <button type="submit" className="btn btn-accent w-full btn-hover">Send Message</button>
        </Form>
      </div>
      {/* Right Side: Additional Info */}
      <div className="card-body bg-base-100 bg-gradient-to-br from-white/10 to-transparent lg:border-1-2 lg:border-base-300 rounded-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-base-content mb-6">Connect With Me</h3>
        {/* Email Info */}
        <div className="flex justify-center mb-6 ">
          <Link href="mailto:rplapointjr@gmail.com" className="btn btn-accent w-full sm:w-[50%] btn-hover">Email</Link>
        </div>
        {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <SocialButtons buttons={socialButtons} iconClass="w-12 h-12"/>
          </div>
      </div>
    </div>
    
  );
};

export default ContactForm;

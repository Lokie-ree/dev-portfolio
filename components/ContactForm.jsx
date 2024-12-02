"use client";

import React from "react";
import Form from "next/form";
import { handleContactForm } from "@/utils/serverActions";
import { MdOutlinePerson, MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <Form action={handleContactForm} className="space-y-6 max-w-md mx-auto">
      <label htmlFor="name" className="input input-bordered flex text-sm items-center rounded-xl shadow-sm gap-2 input-hover">
        <MdOutlinePerson />
        <input
          type="name"
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
      <div>
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          aria-label="Message"
          className="textarea textarea-bordered w-full rounded-xl shadow-sm placeholder:text-gray-400 text-sm leading-relaxed input-hover outline-none"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-accent w-full btn-hover">Send Message</button>
    </Form>
  );
};

export default ContactForm;

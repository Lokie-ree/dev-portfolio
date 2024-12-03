"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlinePerson, MdOutlineEmail } from "react-icons/md";
import { socialButtons } from "@/utils/constants";
import Link from "next/link";
import SocialButtons from "./SocialButtons";

const ContactForm = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_name: form.user_name.value,
          user_email: form.user_email.value,
          message: form.message.value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      form.reset(); // Clear form
    } catch (error) {
      console.error("Error sending email: ", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="card md:card-side gap-4">
      <Toaster />
      {/* Left Side: Form */}
      <div className="card-body bg-base-100 bg-gradient-to-br from-white/10 to-transparent rounded-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-base-content mb-6">
          Contact Me
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <label
            htmlFor="name"
            className="input input-bordered flex text-sm items-center rounded-xl shadow-sm gap-2 input-hover"
          >
            <MdOutlinePerson />
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              aria-label="Name"
              className="grow outline-none"
              required
            />
          </label>

          <label
            htmlFor="email"
            className="input input-bordered flex text-sm items-center rounded-xl shadow-sm gap-2 input-hover"
          >
            <MdOutlineEmail />
            <input
              type="email"
              name="user_email"
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
          <button type="submit" className="btn btn-accent w-full btn-hover">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side: Additional Info */}
      <div className="card-body bg-base-100 bg-gradient-to-br from-white/10 to-transparent lg:border-1-2 lg:border-base-300 rounded-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-base-content mb-6">
          Connect With Me
        </h3>
        {/* Email Info */}
        <div className="flex justify-center mb-6 ">
          <Link
            href="mailto:rplapointjr@gmail.com"
            className="btn btn-accent w-full sm:w-[50%] btn-hover"
          >
            Email
          </Link>
        </div>
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <SocialButtons buttons={socialButtons} iconClass="w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

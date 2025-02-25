"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlinePerson, MdOutlineEmail } from "react-icons/md";
import { FadeIn } from "@/components/animations/MotionWrapper";

const ContactForm = () => {
  const formRef = useRef();
  const router = useRouter();

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
      form.reset();

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error sending email: ", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="card p-6 rounded-xl shadow-md bg-gradient-to-br from-white/10 to-transparent">
      <Toaster />
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <FadeIn>
          <h3 className="text-3xl font-bold text-center">Get in Touch</h3>
        </FadeIn>
        <label
          htmlFor="name"
          className="input input-bordered w-full rounded-xl flex items-center gap-2 input-hover"
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
          className="input input-bordered w-full rounded-xl flex items-center gap-2 input-hover"
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
          rows="3"
          placeholder="Message"
          aria-label="Message"
          className="textarea textarea-bordered w-full rounded-xl placeholder:text-gray-400 text-sm leading-relaxed input-hover outline-none"
          required
        ></textarea>
        <button type="submit" className="cta-btn w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold text-gray-300"
          >
            Get in <span className="text-blue-400">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+9855189129"
                className="text-2xl lg:text-4xl font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-2"
              >
                <span className="text-gray-500 mr-3">
                  <FaPhoneVolume className="text-blue-400" />
                </span>
                (985) 518 - 9129
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:rplapointjr@gmail.com"
                className="text-2xl lg:text-4xl font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-2"
              >
                <span className="text-gray-500 mr-3">
                  <MdEmail className="text-blue-400" />
                </span>
                rplapointjr@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

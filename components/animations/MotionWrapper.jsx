"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/animations";

export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => (
  <motion.div
    variants={fadeIn(direction, delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  className = "",
}) => (
  <motion.div
    variants={slideIn(direction, delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerChildren = ({ children, className = "" }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className={className}
  >
    {children}
  </motion.div>
);

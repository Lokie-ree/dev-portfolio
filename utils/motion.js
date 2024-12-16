export const sectionFadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const cardHover = {
  rest: { scale: 1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const staggerChildren = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

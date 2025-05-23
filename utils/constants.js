import {
  FaReact,
  FaNodeJs,
  FaSquareGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaGithub,
  FaCode,
  FaDiagramProject,
  FaRocket,
  FaUsers,
} from "react-icons/fa6";
import {
  RiNextjsLine,
  RiTailwindCssFill,
  RiUploadCloudFill,
} from "react-icons/ri";
import {
  SiSanity,
  SiVite,
  SiSentry,
  SiVercel,
  SiFirebase,
  SiFramer,
  SiTypescript,
  SiStripe,
  SiGoogleanalytics,
  SiPagespeedinsights,
  SiShadcnui,
  SiClerk,
} from "react-icons/si";
import {
  TbBrandThreejs,
  TbBrandSupabase,
  TbBrandVercel,
  TbBrandNextjs,
} from "react-icons/tb";

import { ICON_COLORS } from "./colors";

export const themes = {
  light: "winter",
  dark: "night",
};

export const desktopLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "#services" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

export const mobileLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "#services" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
  { title: "Tech Stack", path: "#tech-stack" },
  { title: "Key Metrics", path: "#key-metrics" },
];

export const footerLinks = [
  { title: "Tech Stack", path: "#tech-stack" },
  { title: "Key Metrics", path: "#key-metrics" },
];

export const projects = [
  {
    id: 1,
    title: "LearnHive LMS",
    description: "The Modern LMS Platform is a streamlined learning management system that enables educators to create, enroll in, and sell courses with ease. Designed for scalability, it provides a simple yet powerful framework for managing digital courses, with future enhancements planned to introduce AI-powered tools, interactive learning experiences, and advanced integrations.",
    image: "/assets/learnhive-lms.png",
    link: "https://lms-platform-new.vercel.app/",
    code: "https://github.com/Lokie-ree/lms-platform-new",
    techStack: [
      { name: "Next.js", icon: RiNextjsLine, color: ICON_COLORS.Next },
      { name: "React", icon: FaReact, color: ICON_COLORS.React },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: ICON_COLORS.Tailwind,
      },
      {
        name: "Stripe",
        icon: SiStripe,
        color: ICON_COLORS.Stripe,
      },
      {
        name: "Clerk",
        icon: SiClerk,
        color: ICON_COLORS.Clerk,
      },
      {
        name: "Sanity",
        icon: SiSanity,
        color: ICON_COLORS.Sanity,
      },
      {
        name: "ShadCn",
        icon: SiShadcnui,
        color: ICON_COLORS.Shadcn,
      },
      { name: "Vercel", icon: SiVercel, color: ICON_COLORS.Vercel },
    ],
  },

  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio built with Next.js 15, React, Tailwind CSS, DaisyUI, and Framer Motion. Showcases projects and skills with sleek animations and a responsive design.",
    image: "/assets/portfolio-thumbnail.png",
    link: "https://randalllapointjr.com",
    code: "https://github.com/Lokie-ree/dev-portfolio",
    techStack: [
      { name: "Next.js", icon: RiNextjsLine, color: ICON_COLORS.Next },
      { name: "React", icon: FaReact, color: ICON_COLORS.React },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: ICON_COLORS.Tailwind,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: ICON_COLORS.FramerMotion,
      },
      { name: "Vercel", icon: SiVercel, color: ICON_COLORS.Vercel },
    ],
  },

  {
    id: 3,
    title: "E-Commerce",
    description:
      "A feature-rich e-commerce platform with dynamic cart functionality, product listing, and detail pages powered by Sanity CMS. Integrated with Stripe for secure and seamless payment processing.",
    image: "/assets/buttercream-dream-thumbnail.png",
    link: "https://buttercream-dream.vercel.app/",
    code: "https://github.com/Lokie-ree/buttercream-dream",
    techStack: [
      { name: "Next.js", icon: RiNextjsLine, color: ICON_COLORS.Next },
      { name: "React", icon: FaReact, color: ICON_COLORS.React },
      { name: "Sanity", icon: SiSanity, color: ICON_COLORS.Sanity },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: ICON_COLORS.Tailwind,
      },
      { name: "Stripe", icon: SiStripe, color: ICON_COLORS.Stripe },
      { name: "Vercel", icon: SiVercel, color: ICON_COLORS.Vercel },
    ],
  },

  {
    id: 4,
    title: "Kittenz",
    description:
      "A fun and interactive web app that fetches random kitten photos from the CatAPI. Includes a dynamic matching game to test your memory and love for kittens.",
    image: "/assets/kittenz-thumbnail.png",
    link: "https://kittenz-theta.vercel.app/",
    code: "https://github.com/Lokie-ree/kittenz",
    techStack: [
      { name: "Next.js", icon: RiNextjsLine, color: ICON_COLORS.Next },
      { name: "React", icon: FaReact, color: ICON_COLORS.React },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: ICON_COLORS.Tailwind,
      },
      { name: "Vercel", icon: SiVercel, color: ICON_COLORS.Vercel },
    ],
  },

  {
    id: 5,
    title: "YC Directory",
    description:
      "A robust directory app allowing entrepreneurs to search for and explore popular startups. Includes features for user profile creation, startup submissions, and content management powered by Sanity CMS.",
    image: "/assets/ycdirectory-thumbnail.png",
    link: "https://yc-directory-eta-henna.vercel.app/",
    code: "https://github.com/Lokie-ree/yc-directory",
    techStack: [
      { name: "Next.js", icon: RiNextjsLine, color: ICON_COLORS.Next },
      { name: "React", icon: FaReact, color: ICON_COLORS.React },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: ICON_COLORS.Tailwind,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: ICON_COLORS.FramerMotion,
      },
      { name: "Vercel", icon: SiVercel, color: ICON_COLORS.Vercel },
    ],
  },

  {
    id: 6,
    title: "iPhone 15 Clone",
    description:
      "A visually stunning clone of the iPhone 15 website using GSAP and Three.js for interactive 3D animations and graphics, delivering a sleek and immersive user experience.",
    image: "/assets/iphone15.png",
    link: "https://iphone-website-pi.vercel.app/",
    code: "https://github.com/Lokie-ree/iphone-website",
    techStack: [
      { name: "Vite", icon: SiVite, color: ICON_COLORS.Vite },
      { name: "React", icon: FaReact, color: ICON_COLORS.React },
      { name: "Three.js", icon: TbBrandThreejs, color: ICON_COLORS.ThreeJS },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: ICON_COLORS.Tailwind,
      },
      { name: "Sentry", icon: SiSentry, color: ICON_COLORS.Sentry },
      { name: "Vercel", icon: SiVercel, color: ICON_COLORS.Vercel },
    ],
  },
];

export const stackItems = [
  {
    id: 1,
    name: "Next.js",
    icon: TbBrandNextjs,
    color: ICON_COLORS.Next,
  },
  {
    id: 2,
    name: "React",
    icon: FaReact,
    color: ICON_COLORS.React,
  },
  {
    id: 3,
    name: "Node.js",
    icon: FaNodeJs,
    color: ICON_COLORS.Node,
  },
  {
    id: 4,
    name: "Sanity",
    icon: SiSanity,
    color: ICON_COLORS.Sanity,
  },
  {
    id: 5,
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: ICON_COLORS.Tailwind,
  },
  {
    id: 6,
    name: "TypeScript",
    icon: SiTypescript,
    color: ICON_COLORS.TypeScript,
  },
  {
    id: 7,
    name: "Github",
    icon: FaGithub,
    color: ICON_COLORS.GitHub,
  },
  {
    id: 8,
    name: "Vite",
    icon: SiVite,
    color: ICON_COLORS.Vite,
  },
  {
    id: 9,
    name: "Three.js",
    icon: TbBrandThreejs,
    color: ICON_COLORS.ThreeJS,
  },
  {
    id: 10,
    name: "Sentry",
    icon: SiSentry,
    color: ICON_COLORS.Sentry,
  },
  {
    id: 11,
    name: "Motion",
    icon: SiFramer,
    color: ICON_COLORS.FramerMotion,
  },
  {
    id: 12,
    name: "Stripe",
    icon: SiStripe,
    color: ICON_COLORS.Stripe,
  },
  {
    id: 13,
    name: "Firebase",
    icon: SiFirebase,
    color: ICON_COLORS.Firebase,
  },
  {
    id: 14,
    name: "Vercel",
    icon: TbBrandVercel,
    color: ICON_COLORS.Vercel,
  },
  {
    id: 15,
    name: "Supabase",
    icon: TbBrandSupabase,
    color: ICON_COLORS.Supabase,
  },
];

export const metrics = [
  {
    id: 1,
    value: "16+",
    title: "Technologies Mastered",
    description: "Building modern web applications using front-end frameworks, backend APIs, and cloud infrastructure to create seamless digital experiences.",
    icon: FaCode,
  },
  {
    id: 2,
    value: "10+",
    title: "AI Custom Solutions",
    description: "Developed and deployed intelligent applications, integrating AI for automation, personalization, and adaptive learning in EdTech.",
    icon: FaDiagramProject,
  },
  {
    id: 3,
    value: "99%",
    title: "Code Quality",
    description: "Writing clean, efficient, and scalable code with a focus on best practices, performance optimizations, and maintainability.",
    icon: SiGoogleanalytics,
  },
  {
    id: 4,
    value: "250+",
    title: "GitHub Commits",
    description: "Actively pushing updates, refining features, and contributing to repositories that enhance functionality and user experience.",
    icon: FaGithub,
  },
  {
    id: 5,
    value: "300+",
    title: "Continuous Learning",
    description: "Dedicated to mastering emerging technologies, from full-stack development to AI-enhanced automation and SaaS innovations.",
    icon: FaRocket,
  },
  {
    id: 6,
    value: "5+",
    title: "Collaborative Projects",
    description: "Worked with teams in both professional and open-source environments, delivering impactful solutions with real-world applications.",
    icon: FaUsers,
  },
  {
    id: 7,
    value: "2X",
    title: "SEO & Performance",
    description: "Implemented AI-driven automation and data-driven optimizations, reducing load times, improving UX, and increasing efficiency.",
    icon: SiPagespeedinsights,
  },
];

export const services = [
  {
    id: 1,
    title: "Custom Web Apps",
    image: "/assets/custom_web_development.png",
    description:
      "I build custom websites and web apps designed to meet your unique needs.",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    image: "/assets/ecommerce_solutions.png",
    description:
      "I create e-commerce platforms that drive sales and deliver seamless user experiences.",
  },
  {
    id: 3,
    title: "Website Optimization",
    image: "/assets/website_optimization_maintenance.png",
    description:
      "I enhance website speed, performance, and reliability while providing ongoing updates to keep your site running smoothly.",
  },
  {
    id: 4,
    title: "Interactive UX/UI Design",
    image: "/assets/ux_ui_interactive_design.png",
    description:
      "I design intuitive, visually engaging interfaces that prioritize user experience and adapt seamlessly across all devices.",
  },

  {
    id: 5,
    title: "SEO & Digital Marketing",
    image: "/assets/seo_digital_marketing.png",
    description:
      "Boost your online presence with targeted SEO strategies, engaging content, and effective digital marketing solutions.",
  },

  {
    id: 6,
    title: "API Integrations",
    image: "/assets/api_third_party_integration.png",
    description:
      "I connect your systems with custom APIs and third-party tools, ensuring seamless functionality and enhanced efficiency.",
  },
];

export const socialButtons = [
  { id: 1, icon: FaSquareGithub, href: "https://github.com/Lokie-ree" },
  {
    id: 2,
    icon: FaSquareFacebook,
    href: "https://www.facebook.com/randall.lapoint.7/",
  },
  {
    id: 3,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/randall-lapoint-a8a72b289/",
  },
];

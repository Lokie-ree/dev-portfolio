import {
  FaReact,
  FaNodeJs,
  FaSquareGithub,
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiSanity,
  SiVite,
  SiSentry,
  SiVercel,
  SiFirebase,
  SiFramer,
  SiTypescript,
  SiStripe,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

import { ICON_COLORS } from "./colors";

export const TOP_COLORS = ["#30A2F2", "#1E67C6", "#076AF5", "#0F39F5"];

export const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce",
    description:
      "A feature-rich e-commerce platform with dynamic cart functionality, product listing, and detail pages powered by Sanity CMS. Integrated with Stripe for secure and seamless payment processing.",
    image: "/assets/ecommerce1.png",
    link: "https://buttercream-dream.vercel.app/",
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
    id: 2,
    title: "iPhone 15 Clone",
    description:
      "A visually stunning clone of the iPhone 15 website using GSAP and Three.js for interactive 3D animations and graphics, delivering a sleek and immersive user experience.",
    image: "/assets/iphone1.png",
    link: "https://iphone-website-pi.vercel.app/",
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
  {
    id: 3,
    title: "Kittenz",
    description:
      "A fun and interactive web app that fetches random kitten photos from the CatAPI. Includes a dynamic matching game to test your memory and love for kittens.",
    image: "/assets/kittenz1.png",
    link: "https://kittenz-theta.vercel.app/",
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
    id: 4,
    title: "Taskify",
    description:
      "A versatile task management app with smooth animations powered by Framer Motion. Features include task creation, editing, and deletion, with a focus on usability and innovation.",
    image: "/assets/todo1.png",
    link: "https://react-todo-beta-three.vercel.app/",
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
      { name: "Firebase", icon: SiFirebase, color: ICON_COLORS.Firebase },
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio built with Next.js 15, React, Tailwind CSS, DaisyUI, and Framer Motion. Showcases projects and skills with sleek animations and a responsive design.",
    image: "/assets/todo1.png",
    link: "https://react-todo-beta-three.vercel.app/",
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
    title: "YC Directory",
    description:
      "A robust directory app allowing entrepreneurs to search for and explore popular startups. Includes features for user profile creation, startup submissions, and content management powered by Sanity CMS.",
    image: "/assets/todo1.png",
    link: "https://react-todo-beta-three.vercel.app/",
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
];

export const stackItems = [
  {
    id: 1,
    name: "Next.js",
    icon: RiNextjsLine,
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
    name: "Tailwind CSS",
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
    name: "Framer Motion",
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
    icon: SiVercel,
    color: ICON_COLORS.Vercel,
  },
];

export const metrics = [
  {
    id: 1,
    value: "8+",
    label: "Technologies Used",
    description: "Proficient in the latest JavaScript frameworks and libraries",
  },
  {
    id: 2,
    value: "5+",
    label: "Projects Completed",
    description: "From small applications to complex web platforms",
  },
  {
    id: 3,
    value: "99%",
    label: "Code Quality",
    description:
      "Committment to writing clean, efficient, and maintainable code",
  },
  {
    id: 4,
    value: "250+",
    label: "Commits on GitHub",
    description: "Active contributor to personal and collaborative projects",
  },
];

export const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites tailored to any business niche",
  },
  {
    id: "02",
    title: "SEO Optimization",
    description:
      "Enhancing your website's visibility and ranking on search engines",
  },
  {
    id: "03",
    title: "UX/UI Design",
    description:
      "Creating intuitive and engaging user experiences and interfaces to add a spark to your business",
  },
  {
    id: "04",
    title: "Digital Marketing",
    description:
      "Strategizing and executing comprehensive digital marketing to enhance your visibility",
  },

  {
    id: "05",
    title: "Content Creation",
    description:
      "Crafting engaging and relevant content, including blogs, videos, and more",
  },

  {
    id: "06",
    title: "Social Media Management",
    description: "Managing your social media channels to build brand awareness",
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

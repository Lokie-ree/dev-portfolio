import {
  FaReact,
  FaNodeJs,
  FaSquareGithub,
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
  FaStripe,
} from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiSanity,
  SiVite,
  SiSentry,
  SiDaisyui,
  SiFramer,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import {
  FaHandsHelping,
  FaGraduationCap,
  FaStore,
  FaShoppingCart,
  FaCloud,
  FaBusinessTime,
} from "react-icons/fa";

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
    title: "Buttercream Dream E-Commerce",
    description:
      "Full-fledged e-commerce website using Next.js, React, Sanity, and Stripe",
    image: "/assets/ecommerce1.png",
    link: "https://buttercream-dream.vercel.app/",
    techStack: [
      { name: "Next.js", icon: RiNextjsLine, color: ICON_COLORS.Next },
      { name: "React", icon: FaReact, color: ICON_COLORS.React },
      { name: "Sanity", icon: SiSanity, color: ICON_COLORS.Sanity },
      { name: "Stripe", icon: FaStripe, color: ICON_COLORS.Stripe },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: ICON_COLORS.Tailwind,
      },
      { name: "DaisyUI", icon: SiDaisyui, color: ICON_COLORS.DaisyUI },
    ],
  },
  {
    id: 2,
    title: "iPhone 15 Clone",
    description:
      "Clone of the iPhone 15 website using Next.js, React, and GSAP/Three.js for interactive 3D models",
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
    ],
  },
  {
    id: 3,
    title: "Kittenz",
    description:
      "Fetches random photos of cats from an API and includes a matching game",
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
      { name: "DaisyUI", icon: SiDaisyui, color: ICON_COLORS.DaisyUI },
    ],
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Fully functional task management app with a theme switcher and functionality to add, edit, or remove tasks",
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
      { name: "DaisyUI", icon: SiDaisyui, color: ICON_COLORS.DaisyUI },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: ICON_COLORS.FramerMotion,
      },
    ],
  },
  {
    id: 5,
    title: "Dev Portfolio",
    description: "This is my personal portfolio",
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
      { name: "DaisyUI", icon: SiDaisyui, color: ICON_COLORS.DaisyUI },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: ICON_COLORS.FramerMotion,
      },
    ],
  },
];

export const stackItems = [
  {
    id: 1,
    name: "Next.js",
    icon: RiNextjsLine,
    color: "#000000",
  },
  {
    id: 2,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    id: 3,
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    id: 4,
    name: "Sanity",
    icon: SiSanity,
    color: "#F77769",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#0e8ee9",
  },
  {
    id: 6,
    name: "Github",
    icon: FaGithub,
    color: "#000000",
  },
];

export const industryLogos = [
  { title: "Non-Profits", icon: <FaHandsHelping size={40} /> },
  { title: "Education", icon: <FaGraduationCap size={40} /> },
  { title: "Businesses", icon: <FaStore size={40} /> },
  { title: "E-Commerce", icon: <FaShoppingCart size={40} /> },
  { title: "SaaS", icon: <FaCloud size={40} /> },
  { title: "Entrepreneurs", icon: <FaBusinessTime size={40} /> },
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

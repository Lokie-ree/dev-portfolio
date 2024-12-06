import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { playfairDisplay, inter } from "@/components/fonts";

const websiteURL = "https://dev-portfolio-one-swart.vercel.app/";

export const metadata = {
  
  metadataBase: new URL(websiteURL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    title: "Randall LaPoint, Jr. - Fullstack Developer & Educator | Building Ideas into Reality",
    description: "Showcasing Randall's journey as a developer and educator through impactful projects and modern web solutions. Explor sleek designs and robust applications that reflect the future of web development.",
    url: websiteURL,
    siteName: "Randall LaPoint, Jr. - Fullstack Developer & Educator | Building Ideas into Reality",
    images: "./opengraph-image.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "Randall LaPoint, Jr. - Fullstack Developer & Educator | Building Ideas into Reality",
    description: "Showcasing Randall's journey as a developer and educator through impactful projects and modern web solutions. Explor sleek designs and robust applications that reflect the future of web development.",
    creator: "Randall LaPoint, Jr.",
    images: ["./twitter-image.png"],
  },
  
  title: "Randall LaPoint, Jr. - Fullstack Developer & Educator | Building Ideas into Reality",
  description: "Showcasing Randall's journey as a developer and educator through impactful projects and modern web solutions. Explor sleek designs and robust applications that reflect the future of web development.",
  author: "Randall LaPoint, Jr.",
  keywords: [
    "Randall LaPoint",
    "Fullstack Developer",
    "Web Developer Portfolio",
    "Modern Web Solutions",
    "Innovative Web Development",
    "Sleek Designs",
    "Robust Applications",
    "Educator",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Web Design",
    "Digital Solutions",
    "UI/UX",
    "Frontend Development",
    "Backend Development",
    "Portfolio Projects",
    "Tech Stack",
    "Responsive Design",
    "SEO Optimization",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${playfairDisplay.className} ${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}

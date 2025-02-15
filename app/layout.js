import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { playfairDisplay, inter } from "@/utils/fonts";
import { themes } from "@/utils/constants";

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
    title: "Randall LaPoint Jr | Full-Stack Developer",
    description:
      "Professional portfolio showcasing full-stack development projects and services",
    url: websiteURL,
    siteName:
      "Randall LaPoint, Jr. - Fullstack Developer & Educator | Building Ideas into Reality",
    images: ["/assets/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Randall LaPoint, Jr. - Fullstack Developer & Educator | Building Ideas into Reality",
    description:
      "Showcasing Randall's journey as a developer and educator through impactful projects and modern web solutions. Explor sleek designs and robust applications that reflect the future of web development.",
    creator: "Randall LaPoint, Jr.",
    images: ["./twitter-image.png"],
  },

  title: "Randall LaPoint Jr | Full-Stack Developer",
  description:
    "Professional portfolio showcasing full-stack development projects",
  author: "Randall LaPoint, Jr.",
  keywords: ["Full-Stack Developer", "Web Development", "React", "Next.js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={themes.dark}>
      <body
        className={`${playfairDisplay.className} ${inter.className} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/react";

export const metadata = {
  title: "Developer Portfolio",
  description: "Portfolio showcasing Randall LaPoint's most recent projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Footer />
      </body>
    </html>
  );
}

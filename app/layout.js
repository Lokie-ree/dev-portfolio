import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics";

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
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

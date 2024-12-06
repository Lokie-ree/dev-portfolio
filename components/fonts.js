import {Playfair_Display, Inter} from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500"],
});
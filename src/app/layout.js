import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Bubble from "./components/Bubble/Bubble";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Reza Aditria - Front-end Developer",
  description: "Muhammad Reza Aditria's portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Bubble />
      </body>
    </html>
  );
}

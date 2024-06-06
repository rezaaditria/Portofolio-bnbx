import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Bubble from "./components/Bubble/Bubble";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Reza Aditria",
  description: "frontend dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Bubble />
      </body>
    </html>
  );
}

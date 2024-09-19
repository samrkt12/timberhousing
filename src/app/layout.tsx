import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const lexend = Lexend_Deca({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "WoodenHousing",
  description:
    "We have a floor plan for you! We deliver log and Modular prefab home on time, on budget, and in balance with nature's perfection. Our best design team also assist you in creating that customized home you've been dreaming of.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-RTBBMBLM9M" />
    </html>
  );
}

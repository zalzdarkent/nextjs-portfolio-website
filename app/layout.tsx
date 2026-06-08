import type { Metadata } from "next";
import { Rubik_Glitch, Special_Elite, VT323 } from "next/font/google"; 
import "./globals.css";

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"], // Font glitch hanya ada satu weight tebal
  variable: "--font-glitch",
  display: "swap",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"], // Font mesin tik rusak
  variable: "--font-special-elite",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALIF.DEV — Full Stack Developer",
  description: "Portfolio Alif Fadillah Ummar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${rubikGlitch.variable} ${specialElite.variable} ${vt323.variable} scroll-smooth`}>
      <body className="bg-brutal-white antialiased text-brutal-black">
        {children}
      </body>
    </html>
  );
}
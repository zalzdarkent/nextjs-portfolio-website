"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rubik_Glitch, Special_Elite, VT323 } from "next/font/google";

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-glitch",
  display: "swap",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special-elite",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
  display: "swap",
});

const content = {
  id: {
    subtitle: "HALAMAN TIDAK DITEMUKAN",
    desc: "Ups! Halaman yang kamu cari tidak ada atau telah dipindahkan.",
    btn: "← Kembali ke Beranda",
  },
  en: {
    subtitle: "PAGE NOT FOUND",
    desc: "Oops! The page you're looking for doesn't exist or has been moved.",
    btn: "← Back to Home",
  },
} as const;

function CustomCursorNF() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 640) return;
    const cursor = document.createElement("div");
    cursor.className = "fixed top-0 left-0 pointer-events-none z-[999999]";
    cursor.innerHTML = `<div style="width:16px;height:16px;background:#BFFF00;border:3px solid #000;box-shadow:2px 2px 0 #000;transition:transform .15s"></div>`;
    document.body.appendChild(cursor);

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const render = () => {
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;
      cursor.style.transform = `translate3d(${pos.x}px,${pos.y}px,0)`;
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(render);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cursor.remove();
    };
  }, []);
  return null;
}

export default function NotFound() {
  const [locale, setLocale] = useState<keyof typeof content>("id");

  useEffect(() => {
    const match = window.location.pathname.match(/^\/(en|id)\b/);
    if (match) setLocale(match[1] as keyof typeof content);
  }, []);

  const t = content[locale];

  return (
    <div className={`${rubikGlitch.variable} ${specialElite.variable} ${vt323.variable}`}>
      <CustomCursorNF />
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
          backgroundImage: `
            repeating-conic-gradient(from 30deg, transparent 0 120deg, #2a2a2a 0 180deg) calc(0.5 * 200px) calc(0.5 * 200px * 0.577),
            repeating-conic-gradient(from 30deg, #0a0a0a 0 60deg, #616161 0 120deg, #2a2a2a 0 180deg)
          `,
          backgroundSize: "200px calc(200px * 0.577)"
        }} />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="font-display text-[10rem] leading-none sm:text-[14rem] lg:text-[18rem]"
          >
            <span className="inline-block bg-brutal-yellow px-8 text-brutal-black shadow-brutal">
              404
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="border-4 border-brutal-black bg-brutal-white px-8 py-4 shadow-brutal"
          >
            <h2 className="font-mono text-2xl font-black tracking-widest sm:text-3xl">
              {t.subtitle}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="max-w-md font-body text-lg leading-relaxed sm:text-xl"
          >
            {t.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3 border-4 border-brutal-black bg-brutal-black px-10 py-4 font-mono text-lg font-black text-brutal-white shadow-brutal transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none sm:text-xl"
            >
              <span className="inline-block transition-transform group-hover:-translate-x-1">
                {t.btn}
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4 font-mono text-sm text-brutal-black/30"
          >
            <span className="border-2 border-brutal-black/20 px-3 py-1">ERROR 404</span>
            <span className="border-2 border-brutal-black/20 px-3 py-1">{">"} PAGE_MISSING</span>
            <span className="border-2 border-brutal-black/20 px-3 py-1">NOT_FOUND</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);

    // 2. Intersection Observer untuk deteksi section yang aktif pas di-scroll
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Memicu pergantian saat section berada di tengah layar
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Ambil semua elemen section berdasarkan href di NAV_LINKS
    NAV_LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href.replace("#", ""));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 h-16 bg-brutal-yellow border-b-4 border-brutal-black transition-shadow ${
          scrolled ? "shadow-brutal" : ""
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-brutal-black/10">
          <div
            className="h-full bg-brutal-black border-r-2 border-brutal-black transition-[width] duration-100 ease-linear"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="font-display text-2xl font-extrabold tracking-tight text-brutal-black hover:opacity-80 transition-opacity"
        >
          <img 
            src="/logo/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="inline-block mr-2"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex list-none h-full items-center">
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.href.replace("#", "");
            
            return (
              <li key={i} className="h-full flex items-center">
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block px-5 py-2 font-body font-bold text-sm uppercase tracking-widest text-brutal-black border-l-3 border-brutal-black transition-all ${
                    isActive
                      ? "bg-brutal-black text-brutal-yellow shadow-none scale-100" 
                      : "hover:bg-brutal-black/10"
                  } ${i === NAV_LINKS.length - 1 ? "border-r-3" : ""}`}
                >
                  {t(link.key)} 
                </a>
              </li>
            );
          })}
        </ul>

        <LanguageSwitcher />

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 border-3 border-brutal-black shadow-brutal-sm bg-brutal-white cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[3px] bg-brutal-black origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[3px] bg-brutal-black"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[3px] bg-brutal-black origin-center"
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ y: "-110%" }}
            animate={{ y: 0 }}
            exit={{ y: "-110%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="fixed top-16 left-0 right-0 z-40 bg-brutal-yellow border-b-4 border-brutal-black md:hidden"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  // 💡 DI SINI JUGA: Untuk versi menu handphone
                  className={`block px-8 py-4 font-body font-bold text-xl uppercase tracking-wide text-brutal-black border-b-2 border-black/20 transition-colors ${
                    isActive 
                      ? "bg-brutal-orange text-white border-b-4 border-black" // Kasih warna orange brutalist pas mobile aktif
                      : "hover:bg-brutal-black hover:text-brutal-yellow"
                  }`}
                >
                  {t(link.key)}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black/30 md:hidden"
            style={{ top: "calc(64px)" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
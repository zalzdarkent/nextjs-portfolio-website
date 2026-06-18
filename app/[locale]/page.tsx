"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "../../components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import { RocketIcon } from "lucide-react";
import { PiRocketLight } from "react-icons/pi";
import { BsFillRocketFill } from "react-icons/bs";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState<boolean | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleEnter = () => {
    // Called when user clicks ENTER button
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleComplete = () => {
    localStorage.setItem("portfolioVisited", "true");
    setShowSplash(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage = (scrollTop / docHeight) * 100;

      setShowBackToTop(scrollPercentage > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const visited = localStorage.getItem("portfolioVisited");

    if (visited) {
      setShowSplash(false);
      setShowPortfolio(true);
    } else {
      setShowSplash(true);
    }
  }, []);

  if (showSplash === null) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo(0, 0);
          setShowPortfolio(true);
        }}
      >
        {showSplash && (
          <SplashScreen onEnter={handleEnter} onComplete={handleComplete} />
        )}
      </AnimatePresence>

      {showPortfolio && (
        <>
          <Navbar />

          <main>
            <HeroSection />
            <Marquee />
            <AboutSection />
            <TechSection />
            <PortfolioSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={{
              x: 4,
              y: 4,
              boxShadow: "2px 2px 0px #0A0A0A",
            }}
            whileTap={{
              x: 8,
              y: 8,
              boxShadow: "0px 0px 0px #0A0A0A",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            onClick={scrollToTop}
            className="
              fixed bottom-6 right-6 z-[999]
              flex h-16 w-16 items-center justify-center
              border-4 border-brutal-black
              bg-brutal-yellow
              font-mono text-2xl font-black
              shadow-[8px_8px_0px_#0A0A0A]
            "
          >
            {/* <PiRocketLight/> */}
            <BsFillRocketFill />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
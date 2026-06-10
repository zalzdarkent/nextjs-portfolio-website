"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
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


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState<boolean | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleComplete = () => {
    localStorage.setItem("portfolioVisited", "true");
    setShowSplash(false);
  };

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
          <SplashScreen onComplete={handleComplete} />
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
    </>
  );
}
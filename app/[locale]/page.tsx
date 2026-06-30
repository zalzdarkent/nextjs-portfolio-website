"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "../../components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import { BsFillRocketFill } from "react-icons/bs";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState<boolean | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleEnter = () => {

  };

  const scrollToTop = () => {
    setIsLaunching(true); 

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }, 300);

    setTimeout(() => {
      setIsLaunching(false);
    }, 1200); 
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

      setShowBackToTop(scrollPercentage > 5);
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

  const particles = Array.from({ length: 5 });

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
            <ProjectsSection />
            {/* <TestimonialsSection /> */}
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
            animate={{  
              scale: 1, 
              y: isLaunching ? [0, 0, -100, -500] : 0,
              opacity: isLaunching ? [1, 1, 0.8, 0] : 1
            }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={!isLaunching ? {
              x: 4,
              y: 4,
              boxShadow: "2px 2px 0px #0A0A0A",
            } : {}}
            whileTap={!isLaunching ? {
              x: 8,
              y: 8,
              boxShadow: "0px 0px 0px #0A0A0A",
            } : {}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              y: { duration: isLaunching ? 0.8 : undefined, ease: "easeInOut" },
              opacity: { duration: isLaunching ? 0.8 : undefined }
            }}
            onClick={scrollToTop}
            disabled={isLaunching}
            className="
              fixed bottom-6 right-6 z-[999]
              flex h-16 w-16 items-center justify-center
              border-4 border-brutal-black
              bg-brutal-yellow
              font-mono text-2xl font-black
              shadow-[8px_8px_0px_#0A0A0A] hover:shadow-brutal-hover
              disabled:pointer-events-none
            "
          >
            {/* Wrapper Icon Roket dengan Animasi Getar saat Launch */}
            <motion.div
              animate={isLaunching ? {
                x: [0, -3, 3, -3, 3, -2, 2, 0],
                y: [0, -1, 1, -2, 2, -1, 0],
                scale: [1, 1.15, 1.25, 1.2]
              } : {}}
              transition={{ 
                repeat: isLaunching ? Infinity : 0, 
                duration: 0.1 // Getaran dibuat lebih cepat/intens
              }}
            >
              <BsFillRocketFill />
            </motion.div>

            {/* Efek Api & Asap Berbrutal-style */}
            {isLaunching && (
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                {particles.map((_, index) => {
                  const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-400", "bg-gray-400"];
                  const randomColor = colors[index % colors.length];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 1, y: 0, scale: 1 }}
                      animate={{ 
                        opacity: 0, 
                        y: [0, 30 + index * 10], // Semburan api lebih panjang ke bawah
                        scale: [1, 1.8, 0.1], 
                        x: (index % 2 === 0 ? 1 : -1) * (index * 6) 
                      }}
                      transition={{
                        duration: 0.6, // Efek api bertahan sedikit lebih lama
                        ease: "easeOut",
                        delay: index * 0.03
                      }}
                      className={`absolute w-4 h-4 rounded-full border-2 border-black ${randomColor}`}
                    />
                  );
                })}
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface SplashScreenProps {
  onEnter: () => void;
  onComplete: () => void;
}

// Data elemen interaktif dengan posisi responsif (menggunakan % agar aman di semua layar)
const floatingElements = [
  { id: 1, type: "circle", size: "w-14 h-14 md:w-20 md:h-20", color: "bg-[#00F0FF]", top: "10%", left: "10%", rotate: 15 },
  { id: 2, type: "square", size: "w-16 h-16 md:w-24 md:h-24", color: "bg-[#FF007A]", bottom: "12%", left: "8%", rotate: -15 },
  { id: 3, type: "triangle", size: "w-16 h-16 md:w-24 md:h-24", color: "bg-[#00FF66]", top: "12%", right: "10%", rotate: 30 },
  { id: 4, type: "star-like", size: "w-12 h-12 md:w-20 md:h-20", color: "bg-[#9D00FF]", bottom: "15%", right: "8%", rotate: -45 },
];

export default function SplashScreen({
  onEnter,
  onComplete,
}: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Ref ini penting sebagai "pagar" agar elemen tidak dilempar keluar dari layar monitor
  const constraintsRef = useRef(null);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.random() * 40;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  const handleStartLoading = () => {
    setIsLoading(true);
    if (onEnter) onEnter();
  };

  return (
    <>
      <motion.div
        ref={constraintsRef} // Menjadikan seluruh area layar sebagai area bermain drag
        initial={{ opacity: 1 }}
        exit={{
          scaleY: 0.95,
          y: "-100%",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
        className="
          fixed inset-0 z-[9999]
          bg-brutal-yellow
          flex flex-col items-center justify-center
          overflow-hidden
          select-none
          touch-none
        "
      >
        {/* TEXTURE BACKGROUND (Halftone Dots) */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(#1a1a1a 22%, transparent 22%)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* PLAYABLE & DRAGGABLE FLOATING ELEMENTS */}
        {floatingElements.map((el) => {
          return (
            <motion.div
              key={el.id}
              drag
              dragConstraints={constraintsRef} // Mengunci agar tidak hilang keluar layar
              dragElastic={0.2} // Efek memantul saat ditarik ke ujung layar
              dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }} // Efek inertia pas dilempar
              whileDrag={{ 
                scale: 1.15, 
                rotate: el.rotate + 45,
                cursor: "grabbing",
                zIndex: 50 
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: el.rotate - 15,
                cursor: "grab" 
              }}
              initial={{ scale: 0, opacity: 0, rotate: el.rotate }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -12, 0], // Tetap mengambang otomatis kalau dianggurin
              }}
              transition={{
                scale: { type: "spring", stiffness: 200, damping: 15 },
                y: { repeat: Infinity, duration: 3 + el.id, ease: "easeInOut" },
              }}
              style={{
                position: 'absolute',
                top: el.top,
                bottom: el.bottom,
                left: el.left,
                right: el.right,
              }}
              className="z-20 active:cursor-grabbing"
            >
              {/* Desain Elemen Neo-Brutalism */}
              {el.type === "circle" && (
                <div className={`${el.size} ${el.color} rounded-full border-4 border-brutal-black shadow-[4px_4px_0px_#1a1a1a]`} />
              )}
              {el.type === "square" && (
                <div className={`${el.size} ${el.color} border-4 border-brutal-black shadow-[6px_6px_0px_#1a1a1a]`} />
              )}
              {el.type === "triangle" && (
                <div 
                  className={`${el.size} ${el.color} border-4 border-brutal-black shadow-[5px_5px_0px_#1a1a1a]`}
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} // Menggunakan clip-path agar border border-4 tetap rapi mengikuti segitiga
                />
              )}
              {el.type === "star-like" && (
                <div className={`${el.size} ${el.color} border-4 border-brutal-black shadow-[4px_4px_0px_#1a1a1a] rotate-45`} />
              )}
            </motion.div>
          );
        })}

        {/* MAIN CONTENT CONTAINER (RESPONSIVE WORK) */}
        <div className="text-center px-4 z-10 max-w-xl w-full">
          {/* PORTFOLIO */}
          <motion.div
            initial={{ y: -100, rotate: -6, opacity: 0 }}
            animate={{ y: 0, rotate: -2, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="
              inline-block
              bg-brutal-white
              border-4 border-brutal-black
              shadow-[6px_6px_0px_#1a1a1a]
              px-6 py-2 md:px-10 md:py-4
              mb-6 md:mb-8
              w-auto
            "
          >
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-brutal-black">
              PORTFOLIO
            </h1>
          </motion.div>

          {/* ROLE */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-1 md:space-y-2"
          >
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black leading-none text-brutal-black">
              FULLSTACK
            </h2>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black leading-none text-brutal-black">
              WEB DEVELOPER
            </h2>
          </motion.div>

          {/* BUTTON / PROGRESS BAR */}
          <div className="mt-8 md:mt-12 flex justify-center items-center min-h-[90px]">
            {!isLoading ? (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                whileHover={{ x: -2, y: -2, boxShadow: "8px 8px 0px #FAFAF8" }}
                whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px #FAFAF8" }}
                onClick={handleStartLoading}
                className="
                  bg-brutal-black
                  text-brutal-yellow
                  border-4 border-brutal-white
                  px-8 py-3 md:px-12 md:py-4
                  font-mono text-lg md:text-xl font-bold
                  uppercase tracking-widest
                  cursor-pointer
                  transition-shadow duration-100
                "
                style={{ boxShadow: "5px 5px 0px #FAFAF8" }}
              >
                ENTER →
              </motion.button>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full px-4"
              >
                <div className="
                  bg-brutal-white
                  border-4 border-brutal-black
                  p-1.5 md:p-2
                  shadow-[4px_4px_0px_#1a1a1a]
                  w-full max-w-[450px] mx-auto
                "
              >
                <motion.div
                  className="h-10 md:h-12 bg-brutal-black flex items-center justify-center relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                >
                  <motion.span
                    className="font-mono text-brutal-yellow font-bold text-base md:text-lg whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: progress > 10 ? 1 : 0 }}
                  >
                    {Math.floor(progress)}%
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
"use client";

import { motion } from "framer-motion";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({
  onEnter,
}: SplashScreenProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          scaleY: 0.95,
          y: "-100%",
          transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
        className="
        fixed inset-0 z-[9999]
        bg-brutal-yellow
        flex items-center justify-center
        overflow-hidden
      "
      >
        <div className="text-center px-6">
          {/* PORTFOLIO */}
          <motion.div
            initial={{
              y: -150,
              rotate: -8,
              opacity: 0,
            }}
            animate={{
              y: 0,
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
            inline-block
            bg-brutal-white
            border-4 border-brutal-black
            shadow-brutal
            px-8 py-3
            mb-8
          "
          >
            <h1 className="font-display text-5xl md:text-7xl font-black">
              PORTFOLIO
            </h1>
          </motion.div>

          {/* ROLE */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-black leading-tight">
              FULLSTACK
            </h2>

            <h2 className="font-display text-3xl md:text-5xl font-black leading-tight">
              WEB DEVELOPER
            </h2>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            initial={{
              scale: 0,
              rotate: -5,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{
              x: 3,
              y: 3,
              boxShadow: "3px 3px 0px #FAFAF8",
            }}
            whileTap={{
              x: 6,
              y: 6,
              boxShadow: "0px 0px 0px #FAFAF8",
              transition: {
                duration: 0.05,
              },
            }}
            onClick={onEnter}
            className="
    mt-12
    bg-brutal-black
    text-brutal-yellow
    border-4
    border-brutal-white
    px-10
    py-4
    font-mono
    text-xl
    font-bold
    uppercase
    tracking-widest
  "
            style={{
              boxShadow: "6px 6px 0px #FAFAF8",
            }}
          >
            ENTER →
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
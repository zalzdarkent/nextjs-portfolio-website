"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onEnter: () => void;
  onComplete: () => void;
}

export default function SplashScreen({
  onEnter,
  onComplete,
}: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

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

          {/* BUTTON / PROGRESS BAR */}
          {!isLoading ? (
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
              onClick={() => setIsLoading(true)}
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
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-12 w-full"
              style={{ maxWidth: "520px" }}
            >
              <div className="
                bg-brutal-white
                border-4 border-brutal-black
                p-2
                overflow-hidden
              "
                style={{
                  boxShadow: "4px 4px 0px #1a1a1a",
                }}
              >
                <motion.div
                  className="
                    h-12
                    bg-brutal-black
                    flex items-center justify-center
                    relative
                  "
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.span
                    className="
                      font-mono
                      text-brutal-yellow
                      font-bold
                      text-lg
                      whitespace-nowrap
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: progress > 5 ? 1 : 0 }}
                  >
                    {Math.floor(progress)}%
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}
"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Braces, Code2, MousePointer2, Sparkles } from "lucide-react";
import Image from "next/image";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiCodeigniter, SiNextdotjs } from "react-icons/si";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  onEnter: () => void;
  onComplete: () => void;
}

type FloatingElement = {
  id: number;
  label: string;
  type: "circle" | "square" | "triangle" | "diamond";
  size: string;
  color: string;
  textColor?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
  delay: number;
  hiddenOnMobile?: boolean;
};

const floatingElements: FloatingElement[] = [
  {
    id: 1,
    label: "API",
    type: "circle",
    size: "w-16 h-16 md:w-24 md:h-24",
    color: "bg-[#00F0FF]",
    top: "9%",
    left: "8%",
    rotate: 12,
    delay: 0.1,
    hiddenOnMobile: true,
  },
  {
    id: 2,
    label: "UI",
    type: "square",
    size: "w-16 h-16 md:w-24 md:h-24",
    color: "bg-brutal-pink",
    bottom: "12%",
    left: "7%",
    rotate: -12,
    delay: 0.22,
    hiddenOnMobile: true
  },
  {
    id: 3,
    label: "DB",
    type: "triangle",
    size: "w-20 h-20 md:w-28 md:h-28",
    color: "bg-brutal-lime",
    top: "11%",
    right: "8%",
    rotate: 28,
    delay: 0.34,
    hiddenOnMobile: true
  },
  {
    id: 4,
    label: "JS",
    type: "diamond",
    size: "w-14 h-14 md:w-20 md:h-20",
    color: "bg-[#9D00FF]",
    textColor: "text-white",
    bottom: "14%",
    right: "7%",
    rotate: -42,
    delay: 0.46,
    hiddenOnMobile: true
  },
];

const techs = [
  { icon: FaLaravel, bg: "#FF2D20", name: "Laravel" },
  { icon: SiCodeigniter, bg: "#FF2D20", name: "CodeIgniter" },
  { icon: FaReact, bg: "#121213", name: "React" },
  { icon: SiNextdotjs, bg: "#FFFFFF", name: "Next.js" },
  { icon: FaNodeJs, bg: "#83CD29", name: "Node.js" },
];

const loadingSteps = ["BOOT", "COMPILE", "POLISH", "LAUNCH"];

export default function SplashScreen({
  onEnter,
  onComplete,
}: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18, mass: 0.35 });
  const tiltX = useTransform(springY, [-300, 300], [4, -4]);
  const tiltY = useTransform(springX, [-300, 300], [-5, 5]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval);
          window.setTimeout(onComplete, 450);
          return 100;
        }

        const next = prev + 9 + Math.random() * 17;
        return Math.min(next, 100);
      });
    }, 170);

    return () => window.clearInterval(interval);
  }, [isLoading, onComplete]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleStartLoading = () => {
    setIsLoading(true);
    onEnter();
  };

  const activeStep = Math.min(
    loadingSteps.length - 1,
    Math.floor((Math.min(progress, 99) / 100) * loadingSteps.length)
  );

  return (
    <motion.div
      ref={constraintsRef}
      onPointerMove={handlePointerMove}
      initial={{ opacity: 1 }}
      exit={{
        y: "-104%",
        rotate: -1.5,
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden bg-brutal-yellow
        select-none touch-none
      "
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-brutal-white opacity-40 blur-3xl"
        style={{ x: springX, y: springY }}
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-cubes opacity-[0.50]"
      />

      {floatingElements.map((el) => (
        <FloatingShape key={el.id} element={el} constraintsRef={constraintsRef} />
      ))}

      <motion.main
        style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 }}
        className="relative z-20 w-full max-w-4xl px-5 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -24, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ delay: 0.12, type: "spring", stiffness: 180, damping: 18 }}
          className="mx-auto mb-5 inline-flex items-center gap-2 border-3 border-brutal-black bg-brutal-lime px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest shadow-brutal-sm sm:text-sm"
        >
          <Sparkles size={10} strokeWidth={3} />
          Fullstack Portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ delay: 0.18, type: "spring", stiffness: 150, damping: 15 }}
          className="
            relative mx-auto max-w-[680px]
            border-4 border-brutal-black bg-brutal-white
            px-4 py-5 shadow-[10px_10px_0px_#0a0a0a]
            sm:px-8 sm:py-6 md:shadow-[14px_14px_0px_#0a0a0a]
          "
        >
          <motion.div
            aria-hidden
            className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center border-4 border-brutal-black bg-brutal-pink text-white shadow-brutal-sm"
            animate={{ rotate: [-6, 7, -6], y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 size={24} strokeWidth={3} />
          </motion.div>

          <motion.div
            aria-hidden
            className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center border-4 border-brutal-black bg-brutal-blue text-white shadow-brutal-sm"
            animate={{ rotate: [6, -8, 6], y: [0, 5, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Braces size={24} strokeWidth={3} />
          </motion.div>

          <div className="grid items-center gap-5 text-center sm:grid-cols-[220px_1fr] sm:text-left md:grid-cols-[250px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -36, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ delay: 0.28, type: "spring", stiffness: 170, damping: 18 }}
              whileHover={{
                x: 6,
                y: 6,
                rotate: 1,
                boxShadow: "3px 3px 0px #0a0a0a",
              }}
              className="
                group relative mx-auto aspect-[4/5] w-[190px]
                border-4 border-brutal-black bg-brutal-yellow
                p-2 shadow-[9px_9px_0px_#0a0a0a]
                sm:w-full
              "
            >
              <div
                aria-hidden
                className="absolute -right-3 -top-3 z-20 border-3 border-brutal-black bg-brutal-lime px-2 py-1 font-mono text-xs font-black uppercase shadow-brutal-sm"
              >
                ME
              </div>
              <div className="relative h-full overflow-hidden border-3 border-brutal-black bg-brutal-white">
                <Image
                  src="/profile/alif.jpeg"
                  alt="Alif Fadillah Ummar"
                  fill
                  sizes="(max-width: 640px) 190px, 250px"
                  priority
                  className="object-cover grayscale contrast-125 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* <div
                    aria-hidden
                    className="absolute inset-0 mix-blend-multiply opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, #0a0a0a 0 2px, transparent 2px 7px)",
                    }}
                  /> */}
              </div>
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="mb-2 font-mono text-sm font-bold uppercase tracking-widest text-black/70 sm:text-base"
              >
                Alif Fadillah Ummar
              </motion.p>

              <motion.h1
                className="
                  font-display
                  text-[clamp(1.5rem,5vw,3.5rem)]
                  font-black
                  leading-[0.88]
                  text-brutal-black
                "
              >
                FULLSTACK
                <span
                  className="
                    mt-2 block w-fit
                    mx-auto sm:mx-0
                    border-4 border-brutal-black
                    bg-brutal-yellow
                    px-2 pb-1
                    shadow-brutal
                  "
                >
                  DEVELOPER
                </span>
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
          >
            {techs.map(({ icon: Icon, bg, name }, index) => (
              <motion.div
                key={name}
                whileHover={{ y: -4, rotate: index % 2 ? 2 : -2 }}
                className="flex h-11 w-11 items-center justify-center border-3 border-brutal-black shadow-brutal-sm"
                style={{ backgroundColor: bg }}
                title={name}
              >
                <Icon
                  size={22}
                  className={name === "Next.js" ? "text-black" : "text-white"}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mx-auto mt-8 flex min-h-[104px] max-w-xl items-center justify-center">
          {!isLoading ? (
            <motion.button
              type="button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
              transition={{ delay: 0.62, type: "spring", stiffness: 240, damping: 17 }}
              whileHover={{
                x: 5,
                y: 5,
                rotate: -1,
                boxShadow: "2px 2px 0px #FAFAF8",
              }}
              whileTap={{ x: 8, y: 8, boxShadow: "0px 0px 0px #FAFAF8" }}
              onClick={handleStartLoading}
              className="
                group inline-flex items-center justify-center gap-3
                border-4 border-brutal-white bg-brutal-black
                px-7 py-4 font-mono text-lg font-bold uppercase tracking-widest
                text-brutal-yellow shadow-[8px_8px_0px_#FAFAF8]
                transition-colors duration-150
                sm:px-10 sm:text-xl
              "
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isHovered ? "letsgo" : "enter"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {isHovered ? "Let's Go!!" : "Enter Site"}
                </motion.span>
              </AnimatePresence>

              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex"
              >
                <ArrowRight size={24} strokeWidth={3} />
              </motion.span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              className="w-full border-4 border-brutal-black bg-brutal-white p-2 shadow-brutal"
            >
              <div className="mb-2 flex items-center justify-between px-1 font-mono text-sm font-bold uppercase tracking-widest">
                <span>{loadingSteps[activeStep]}</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="h-12 overflow-hidden border-3 border-brutal-black bg-brutal-yellow">
                <motion.div
                  className="relative h-full bg-brutal-black"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.18, ease: "linear" }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-70"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, #FDE047 0 8px, transparent 8px 16px)",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-5 hidden items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-white/90 sm:flex"
        >
          <MousePointer2 size={15} strokeWidth={3} />
          Drag the shapes. Hover the poster. Then launch.
        </motion.div>
      </motion.main>
    </motion.div>
  );
}

function FloatingShape({
  element,
  constraintsRef,
}: {
  element: FloatingElement;
  constraintsRef: React.RefObject<HTMLDivElement>;
}) {
  const position: CSSProperties = {
    top: element.top,
    bottom: element.bottom,
    left: element.left,
    right: element.right,
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.18}
      dragTransition={{ bounceStiffness: 450, bounceDamping: 24 }}
      initial={{ scale: 0, opacity: 0, rotate: element.rotate }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: element.rotate,
        y: [0, -14, 0],
      }}
      transition={{
        scale: { delay: element.delay, type: "spring", stiffness: 220, damping: 14 },
        opacity: { delay: element.delay, duration: 0.15 },
        y: {
          delay: element.delay,
          repeat: Infinity,
          duration: 3.2 + element.id * 0.35,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.12,
        rotate: element.rotate + 12,
        cursor: "grab",
        boxShadow: "2px 2px 0px #0a0a0a",
      }}
      whileDrag={{
        scale: 1.2,
        rotate: element.rotate + 42,
        cursor: "grabbing",
        zIndex: 60,
      }}
      style={position}
      className={`absolute z-10 ${element.size}`}
    >
      <div
        className={`
          ${element.hiddenOnMobile ? "hidden lg:grid" : "grid"} h-full w-full place-items-center
          border-4 border-brutal-black ${element.color}
          font-mono text-base font-black uppercase ${element.textColor ?? "text-brutal-black"}
          shadow-[7px_7px_0px_#0a0a0a]
        `}
        style={{
          borderRadius: element.type === "circle" ? "999px" : "0",
          clipPath:
            element.type === "triangle"
              ? "polygon(50% 0%, 0% 100%, 100% 100%)"
              : undefined,
          transform: element.type === "diamond" ? "rotate(45deg)" : undefined,
        }}
      >
        <span
          style={{
            transform:
              element.type === "diamond"
                ? "rotate(-45deg)"
                : element.type === "triangle"
                  ? "translateY(18%)"
                  : undefined,
          }}
        >
          {element.label}
        </span>
      </div>
    </motion.div>
  );
}

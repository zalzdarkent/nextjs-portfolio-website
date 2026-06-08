"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";
import { FaDocker, FaLaravel, FaReact } from "react-icons/fa6";
import { SiInertia, SiMysql, SiShadcnui, SiTailwindcss } from "react-icons/si";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const techIconMap: Record<string, { icon: any; bg: string; text: string }> = {
  "Laravel": { icon: FaLaravel, bg: "#fd0000", text: "#fffbfb" },
  "React": { icon: FaReact, bg: "#1a1a1a", text: "#1aefe1" },
  "Inertia.js": { icon: SiInertia, bg: "#a025ec", text: "#ffffff" },
  "Tailwind CSS": { icon: SiTailwindcss, bg: "#38BDF8", text: "#0a0a0a" },
  "Shadcn": { icon: SiShadcnui, bg: "#010101", text: "#fbfbfb" },
  "MySQL": { icon: SiMysql, bg: "#00758F", text: "white" },
  "Docker": { icon: FaDocker, bg: "#2496ED", text: "white" },
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock scroll
  useEffect(() => {
    if (project) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [project]);

  // Esc to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20, x: 8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-brutal-white border-4 border-brutal-black shadow-brutal-lg w-full max-w-xl max-h-[88vh] overflow-y-auto"
          >
            {/* Header */}
            <div
              className="flex items-start justify-between gap-4 p-6 border-b-4 border-brutal-black"
            >
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest mb-1 opacity-60">
                  {project.tags.join(" · ")}
                </p>
                <h3 className="font-display text-2xl font-extrabold">{project.name}</h3>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 w-10 h-10 bg-brutal-black text-brutal-yellow border-3 border-brutal-black shadow-brutal-sm font-bold text-lg flex items-center justify-center transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-1 active:translate-y-1"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <p className="font-body text-base leading-relaxed text-black/70">{project.longDesc}</p>

              {/* Tech */}
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/40 mb-3">
                  Teknologi yang Digunakan
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techName: string, index: number) => {
                    const techConfig = techIconMap[techName];
                    if (!techConfig) return null;

                    const IconComponent = techConfig.icon;

                    return (
                      <div
                        key={index}
                        className="relative group"
                      >
                        <span
                          className="flex items-center justify-center p-2 border-3 border-black shadow-brutal-sm transition-transform hover:-translate-y-0.5"
                          style={{
                            background: techConfig.bg,
                            color: techConfig.text,
                          }}
                        >
                          <IconComponent size={18} />
                        </span>

                        {/* Neo Brutalist Tooltip */}
                        <div
                          className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-full
            mb-3
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all
            duration-200
            z-50
            whitespace-nowrap
          "
                        >
                          <div
                            className="
              bg-brutal-white
              border-3
              border-brutal-black
              shadow-brutal-sm
              px-3
              py-1
              font-mono
              text-xs
              font-bold
            "
                          >
                            {techName}
                          </div>

                          {/* Arrow */}
                          <div
                            className="
              absolute
              left-1/2
              -translate-x-1/2
              w-3
              h-3
              bg-brutal-white
              border-r-3
              border-b-3
              border-brutal-black
              rotate-45
              -bottom-1
            "
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>  
              </div>

              {/* Features */}
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/40 mb-3">
                  Highlight Fitur
                </p>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm">
                      <span className="text-brutal-orange font-bold mt-0.5">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 bg-brutal-white border-3 border-brutal-black shadow-brutal-sm font-body font-bold text-sm uppercase tracking-wide transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-1 active:translate-y-1"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 bg-brutal-black text-brutal-yellow border-3 border-brutal-black shadow-brutal-sm font-body font-bold text-sm uppercase tracking-wide transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-1 active:translate-y-1"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

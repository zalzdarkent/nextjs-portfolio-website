"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeader } from "./AboutSection";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiCodeigniter, SiGit, SiTailwindcss, SiTypescript, SiRedis, SiDocker, SiPostgresql, SiMysql } from "react-icons/si";
import { useTranslations } from "next-intl";

const TECHS = [
  { icon: <FaReact />, name: "React", level: "Intermediate", color: "#4fb7fd" },
  { icon: <SiNextdotjs />, name: "Next.js", level: "Intermediate" },
  { icon: <SiTypescript />, name: "TypeScript", level: "Intermediate", color: "#2ea8fa" },
  { icon: <FaNodeJs />, name: "Node.js", level: "Intermediate", color: "#0fbf09" },
  { icon: <SiPostgresql />, name: "PostgreSQL", level: "Beginner", color: "#06469b" },
  { icon: <SiRedis />, name: "Redis", level: "Beginner", color: "#d50a0a" },
  { icon: <SiDocker />, name: "Docker", level: "Beginner", color: "#1b83c9" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Intermediate", color: "#3aa3e9" },
  { icon: <SiGit />, name: "Git", level: "Intermediate", color: "#d51a1a" },
  { icon: <FaLaravel />, name: "Laravel", level: "Advanced", color: "#e31a1a" },
  { icon: <SiCodeigniter />, name: "CodeIgniter", level: "Intermediate", color: "#f12f2f" },
  { icon: <SiMysql />, name: "MySQL", level: "Advanced", color: "#00758f" },
];

const LEVEL_COLORS: Record<string, string> = {
  Expert: "#FDE047",
  Advanced: "#BFFF00",
  Intermediate: "#FF6B35",
};

export default function TechSection() {
  const t = useTranslations("tech");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="tech"
      className="bg-brutal-black px-6 sm:px-10 lg:px-14 py-20 border-b-4 border-brutal-black"
    >
      <SectionHeader num="02" title={t("title")} inView={inView} light />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10"
      >
        {TECHS.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover="hover" // 1. Trigger variant bernama "hover" ke semua child di dalamnya
            whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0px #FDE047" }}
            className="group bg-brutal-white border-3 border-brutal-black cursor-default text-center p-4 transition-colors"
            style={{ boxShadow: "6px 6px 0px #FDE047" }}
            // Efek geser kartu pas di-hover (diambil dari kode awal Anda)
            variants={{
              hover: { x: 4, y: 4, boxShadow: "2px 2px 0px #FDE047" }
            }}
          >
            {/* 2. Ubah span menjadi motion.span agar bisa menganimasikan warna */}
            <motion.span
              className="text-3xl flex mb-2 items-center justify-center text-brutal-black"
              variants={{
                initial: { color: "#000000" },
                hover: {
                  color: tech.color || "#000000",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }
              }}
            >
              {tech.icon}
            </motion.span>

            <span className="font-body font-bold text-sm block">{tech.name}</span>
            <span
              className="inline-block mt-2 font-mono text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 border-2 border-brutal-black"
              style={{ background: LEVEL_COLORS[tech.level] }}
            >
              {t(`levels.${tech.level}`)}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiCodeigniter } from "react-icons/si";

const techStack = [
  { name: "Laravel", Icon: FaLaravel, bg: "#FDE047", text: "#0a0a0a" },
  { name: "React", Icon: FaReact, bg: "#BFFF00", text: "#0a0a0a" },
  { name: "Next.js", Icon: SiNextdotjs, bg: "#4CAF50", text: "#0a0a0a" },
  { name: "CodeIgniter", Icon: SiCodeigniter, bg: "#FFD700", text: "#0a0a0a" },
  { name: "NodeJS", Icon: FaNodeJs, bg: "#FF6B35", text: "white" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 28 } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 grid grid-cols-1 lg:grid-cols-12 border-b-4 border-brutal-black"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:col-span-7 lg:border-r-4 border-brutal-black"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6 self-start">
          <span className="inline-block bg-brutal-lime border-3 border-brutal-black shadow-brutal-sm px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
            ✦ Available for hire ✦
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-display text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.93] tracking-tight mb-6"
        >
          <span className="block">HALO,</span>
          <span className="block">
            SAYA{" "}
            <span className="inline-block bg-brutal-yellow px-2 border-3 border-brutal-black shadow-brutal -rotate-1">
              ALIF
            </span>
          </span>
          <span className="block">DEVELOPER</span>
        </motion.h1>

        {/* Desc */}
        <motion.p
          variants={item}
          className="text-lg leading-relaxed text-black/70 max-w-lg mb-8 font-body"
        >
          Full Stack Developer dengan semangat membangun produk digital yang berdampak.
          Spesialis Laravel, React, Next.js, CodeIgniter, dan Node.js dengan 3+ tahun pengalaman nyata.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
          <BrutalBtn href="#portfolio" variant="yellow">
            Lihat Proyek →
          </BrutalBtn>
          <BrutalBtn href="#contact" variant="dark">
            Hubungi Saya
          </BrutalBtn>
        </motion.div>
      </motion.div>

      {/* Right — Mengambil 5 dari 12 bagian kolom (Lebih Sempit) */}
      {/* 💡 UBAH DI SINI: Tambahkan lg:col-span-5 */}
      <div className="hidden lg:flex lg:col-span-5 items-center justify-center bg-brutal-yellow relative overflow-hidden">
        {/* Decorative stickers */}
        <Sticker className="top-[15%] right-[6%] rotate-[8deg] bg-brutal-orange text-white">
          3+ YRS EXP
        </Sticker>
        <Sticker className="bottom-[12%] left-[4%] -rotate-[5deg] bg-brutal-pink text-white">
          OPEN TO WORK
        </Sticker>

        {/* Floating code tags */}
        <div className="absolute top-[10%] left-[5%] -rotate-2 border-3 border-brutal-black bg-brutal-white px-2 py-1 font-mono text-xs font-bold shadow-brutal-sm">
          {`{"status": "active"}`}
        </div>
        <div className="absolute bottom-[20%] right-[3%] rotate-3 border-3 border-brutal-black bg-brutal-white px-2 py-1 font-mono text-xs font-bold shadow-brutal-sm">
          npm run dev ▶
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 24 }}
          className="relative w-72 bg-brutal-white border-4 border-brutal-black shadow-brutal-lg"
        >
          <div className="flex flex-col items-center gap-4 p-8">
            {/* Avatar */}
            {/* Wrapper Relatif untuk Layering Shadow Bulat */}
            <div className="relative w-28 h-28 group">
              {/* Layer Bayangan Hitam di Belakang (Bulat Sempurna!) */}
              <div className="absolute inset-0 rounded-full bg-brutal-black translate-x-[6px] translate-y-[6px]" />

              {/* Layer Konten Utama di Depan */}
              <div className="absolute inset-0 rounded-full bg-brutal-black border-4 border-brutal-black flex items-center justify-center transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
                <span className="font-display text-3xl font-extrabold text-brutal-yellow">AFU</span>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <p className="font-display text-xl font-extrabold">Alif Fadillah Ummar</p>
              <p className="font-mono text-xs text-black/60 mt-0.5">Full Stack Developer</p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 border-3 border-brutal-black shadow-brutal-sm bg-brutal-lime px-3 py-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse-dot" />
              <span className="font-body font-bold text-xs">Tersedia untuk Proyek</span>
            </div>

            {/* Tech badges */}
            <div className="flex gap-2 flex-wrap justify-center">
              {techStack.map((tech, i) => {
                const IconComponent = tech.Icon;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 font-mono text-[11px] font-bold border-3 border-brutal-black px-2 py-1 transition-transform hover:-translate-y-0.5"
                    style={{
                      background: tech.bg,
                      color: tech.text,
                    }}
                  >
                    <IconComponent size={14} />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function BrutalBtn({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "yellow" | "dark";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-body font-bold text-sm uppercase tracking-widest border-4 border-brutal-black shadow-brutal transition-all duration-100 active:translate-x-[6px] active:translate-y-[6px] active:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-hover";
  const variants = {
    yellow: "bg-brutal-yellow text-brutal-black",
    dark: "bg-brutal-black text-brutal-yellow",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}

function Sticker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute border-3 border-brutal-black shadow-brutal-sm px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest ${className}`}
    >
      {children}
    </div>
  );
}

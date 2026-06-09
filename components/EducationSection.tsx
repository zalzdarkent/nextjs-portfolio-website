"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeader } from "./AboutSection";
import { span } from "framer-motion/m";

const EDUCATION = [
  {
    title: "S1 Informatika",
    place: "Universitas Singaperbangsa Karawang (UNSIKA)",
    period: "2022 - 2026",
    highlights: [
      "Fresh Graduate with cumlaude honor.",
      "Fokus pada pengembangan aplikasi web end-to-end dan struktur data.",
      "Membangun project berbasis teknologi modern dan mengutamakan kualitas kode.",
      "Aktif dalam kegiatan kampus dan organisasi untuk memperluas pengalaman kolaborasi.",
    ],
    accent: "#BFFF00",
  },
  {
    title: "MSIB Studi Independen @ Vocasia",
    place: "Fullstack Web MERN Development",
    period: "2024 - 2024",
    highlights: [
      "Fresh Graduate with cumlaude honor.",
      "Fokus pada pengembangan aplikasi web end-to-end dan struktur data.",
      "Membangun project berbasis teknologi modern dan mengutamakan kualitas kode.",
      "Aktif dalam kegiatan kampus dan organisasi untuk memperluas pengalaman kolaborasi.",
    ],
    accent: "#00ff37",
  },
  {
    title: "Praktik Industri / Magang",
    place: "PT Century Batteries Indonesia & PT AT Indonesia",
    period: "2025 - Sekarang",
    highlights: [
      "Membangun sistem E-Checksheet Pre-Use dan dashboard Preventive Maintenance.",
      "Mengembangkan sistem deteksi APD berbasis Camera Vision menggunakan YOLO.",
      "Menerapkan evaluasi dan optimasi pipeline data agar hasil lebih stabil.",
    ],
    accent: "#FF6B35",
  },
];

const achievements = [
  {
    text: "Head of Technical Core Team @ GDSC",
    color: "bg-brutal-lime",
  },
  {
    text: "Built E-Checksheet System",
    color: "bg-brutal-yellow",
  },
  {
    text: "Preventive Maintenance Dashboard",
    color: "bg-brutal-orange",
  },
  {
    text: "PPE Detection using YOLO",
    color: "bg-brutal-pink",
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="education"
      className="bg-brutal-black px-6 sm:px-10 lg:px-14 py-20 border-b-4 border-brutal-black"
    >
      <SectionHeader num="04" title="EDUCATION" inView={inView} light />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
        {/* Main list */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="lg:col-span-3 space-y-4"
        >
          {EDUCATION.map((edu, idx) => (
            <motion.article
              key={edu.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ x: 4, y: 4, boxShadow: "2px 2px 0px #FDE047" }}
              className="bg-brutal-white border-4 border-brutal-black shadow-brutal p-5"
              style={{ boxShadow: "6px 6px 0px #FDE047" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-lg">{edu.title}</p>
                  <p className="font-body text-sm text-black/60">{edu.place}</p>
                </div>

                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 border-2 border-brutal-black"
                  style={{ background: edu.accent, color: "#0a0a0a" }}
                >
                  {edu.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="font-body text-sm text-black/70 flex gap-2">
                    <span className="mt-2 inline-block w-2 h-2 bg-brutal-black border border-brutal-black" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        {/* Side info */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="lg:col-span-2"
        >
          <div className="space-y-4">
            <div className="bg-brutal-yellow text-brutal-black border-4 border-brutal-black shadow-brutal-white p-5">
              <p className="font-display font-bold text-sm uppercase tracking-widest">
                KOMPETENSI
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { k: "Teknis", v: "Web development, integrasi sistem, dan struktur kode" },
                  { k: "Analitik", v: "Proses data yang rapi untuk hasil yang bisa diukur" },
                  { k: "Eksekusi", v: "Membangun fitur end-to-end dengan target & timeline" },
                ].map((r) => (
                  <div
                    key={r.k}
                    className="border-3 border-brutal-black bg-brutal-white/0 p-3"
                  >
                    <p className="font-body font-bold text-black">{r.k}</p>
                    <p className="font-body text-xs text-black/70 mt-1">{r.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brutal-white border-4 border-brutal-black shadow-brutal-yellow p-5">
              <p className="font-mono font-bold text-sm uppercase tracking-widest text-black/60">
                ACHIEVEMENTS
              </p>
              <div className="mt-4 space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between gap-4 border-3 border-brutal-black ${achievement.color} shadow-brutal-sm p-3`}
                    style={{ boxShadow: "6px 6px 0px #0a0a0a" }}
                  >
                    <p className="font-body font-bold text-sm">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}


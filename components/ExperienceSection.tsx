"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const EXPERIENCE = [
  {
    role: "Google Developer Student Club (GDSC)",
    place: "Chapter Kampus",
    period: "Agustus 2023 - September 2024",
    items: [
      "Berpartisipasi dalam program mentoring dan pengembangan komunitas.",
      "Membangun project dan mengikuti kegiatan berbasis teknologi.",
      "Melatih kemampuan kolaborasi dan komunikasi teknis.",
    ],
    accent: "#BFFF00",
  },
  {
    role: "Laboratorium Komputer",
    place: "Universitas / Organisasi Kampus",
    period: "Januari 2024 - Januari 2026",
    items: [
      "Membimbing praktikum dan membantu operasional kegiatan lab.",
      "Menyusun materi dan alur pembelajaran yang terstruktur.",
      "Berkoordinasi dengan tim untuk memastikan kelancaran event.",
    ],
    accent: "#FDE047",
  },
  {
    role: "PT Century Batteries Indonesia",
    place: "Magang",
    period: "Maret 2025 - Juni 2025",
    items: [
      "Membangun sistem E-Checksheet Pre-Use untuk pemantauan terhadap mesin-mesin yang ada oleh departemen maintenance.",
      "Mengembangkan sistem dashboard Preventive Maintenance untuk departemen maintenance.",
    ],
    accent: "#35ffff",
  },
  {
    role: "PT AT Indonesia",
    place: "Magang",
    period: "Januari 2026 - Sekarang",
    items: [
      "Membangun sistem deteksi APD berbasis Camera Vision menggunakan Yolo.",
      "Mengoptimalkan proses data input dan pengolahan hasil deteksi.",
      "Menerapkan evaluasi sederhana untuk memastikan performa.",
    ],
    accent: "#FF6B35",
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="pengalaman"
      className="px-6 sm:px-10 lg:px-14 py-20 border-b-4 border-brutal-black"
    >
      <SectionHeader num="02" title="PENGALAMAN" inView={inView} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
        {/* Left: big timeline card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="lg:col-span-3"
        >
          <div className="bg-brutal-white border-4 border-brutal-black shadow-brutal">
            <div className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-brutal-black border-4 border-brutal-black shadow-brutal-sm">
                  <span className="font-mono font-extrabold text-brutal-yellow">EXP</span>
                </div>
                <div className="space-y-2">
                  <p className="font-body font-bold text-sm uppercase tracking-widest text-black/60">
                    Fokus eksekusi proyek & kolaborasi
                  </p>
                  <p className="font-display font-extrabold text-[clamp(1.25rem,3vw,1.65rem)] leading-tight">
                    Dari mentoring lab sampai proyek industri: saya terbiasa bekerja
                    dengan target dan timeline.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {EXPERIENCE.map((exp, idx) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="border-3 border-brutal-black bg-brutal-white p-4"
                    whileHover={{
                      x: 4,
                      y: 4,
                      boxShadow: `3px 3px 0px ${"#0a0a0a"}`,
                    }}
                    style={{ boxShadow: "6px 6px 0px #0a0a0a" }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <p className="font-display font-extrabold text-lg">{exp.role}</p>
                        <p className="font-body text-sm text-black/60">{exp.place}</p>
                      </div>
                      <span
                        className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 border-2 border-brutal-black"
                        style={{ background: exp.accent, color: "#0a0a0a" }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {exp.items.map((it, i) => (
                        <li key={i} className="font-body text-sm text-black/70 flex gap-2">
                          <span className="mt-2 inline-block w-2 h-2 bg-brutal-black border border-brutal-black" />
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: quick brutal stats */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="lg:col-span-2"
        >
          <div className="space-y-4">
            <div className="bg-brutal-yellow text-brutal-white border-4 border-brutal-black shadow-brutal p-5">
              <p className="font-mono font-bold text-sm uppercase tracking-widest text-black">
                KEBIASAAN KERJA
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { k: "Cepat adaptasi", v: "Belajar teknologi baru + penerapan langsung" },
                  { k: "Rapi & scalable", v: "Struktur kode & alur pengerjaan yang jelas" },
                  { k: "Kolaboratif", v: "Komunikasi tim untuk mencapai target" },
                ].map((r) => (
                  <div
                    key={r.k}
                    className="border-3 border-brutal-black bg-brutal-white/0 p-3"
                  >
                    <p className="font-body font-bold text-black">{r.k}</p>
                    <p className="font-body text-xs text-brutal-black mt-1">{r.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brutal-white border-4 border-brutal-black shadow-brutal p-5">
              <p className="font-mono font-bold text-sm uppercase tracking-widest text-black/60">
                SNAPSHOT
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { num: "3+", label: "Rangkaian peran" },
                  { num: "1+", label: "Proyek industri" },
                  { num: "Yolo", label: "Deteksi APD" },
                  { num: "Tim", label: "Kolaborasi aktif" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-brutal-white border-3 border-brutal-black shadow-brutal-sm p-4 text-center"
                    style={{ boxShadow: "6px 6px 0px #0a0a0a" }}
                  >
                    <p className="font-display font-extrabold text-3xl">{s.num}</p>
                    <p className="font-body font-bold text-[11px] uppercase tracking-widest text-black/60 mt-1">
                      {s.label}
                    </p>
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


"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeader } from "./AboutSection";
import { useTranslations } from "next-intl";

const ACCENTS = ["#BFFF00", "#00ff37", "#FF6B35"];
const ACHIEVEMENT_COLORS = ["bg-brutal-lime", "bg-brutal-yellow", "bg-brutal-orange", "bg-brutal-pink"];

export default function EducationSection() {
  const t = useTranslations("education");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const eduList = t.raw("list") as {
    title: string;
    place: string;
    period: string;
    highlights: string[];
  }[];

  const competencies = t.raw("competencies.items") as { k: string; v: string }[];
  const achievements = t.raw("achievements.items") as string[];

  return (
    <section
      ref={ref}
      id="education"
      className="px-6 sm:px-10 lg:px-14 py-20 border-b-4 border-brutal-black"
    >
      <SectionHeader num="05" title={t("title")} inView={inView} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
        {/* Main list */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="lg:col-span-3 space-y-4"
        >
          {eduList.map((edu, idx) => (
            <motion.article
              key={edu.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ x: 4, y: 4, boxShadow: "2px 2px 0px #000000" }}
              className="bg-brutal-white border-4 border-brutal-black shadow-brutal p-5"
              style={{ boxShadow: "6px 6px 0px #000000" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-display font-extrabold text-lg">{edu.title}</p>
                  <p className="font-body text-sm text-black/60">{edu.place}</p>
                </div>
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 border-2 border-brutal-black"
                  style={{ background: ACCENTS[idx], color: "#0a0a0a" }}
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
            <div className="bg-brutal-yellow text-brutal-black border-4 border-brutal-black shadow-brutal p-5">
              <p className="font-display font-bold text-sm uppercase tracking-widest">
                {t("competencies.label")}
              </p>
              <div className="mt-4 space-y-3">
                {competencies.map((r) => (
                  <div key={r.k} className="border-3 border-brutal-black bg-brutal-white/0 p-3">
                    <p className="font-body font-bold text-black">{r.k}</p>
                    <p className="font-body text-xs text-black/70 mt-1">{r.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brutal-white border-4 border-brutal-black shadow-brutal p-5">
              <p className="font-mono font-bold text-sm uppercase tracking-widest text-black/60">
                {t("achievements.label")}
              </p>
              <div className="mt-4 space-y-3">
                {achievements.map((text, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between gap-4 border-3 border-brutal-black ${ACHIEVEMENT_COLORS[index]} shadow-brutal-sm p-3`}
                    style={{ boxShadow: "6px 6px 0px #0a0a0a" }}
                  >
                    <p className="font-body font-bold text-sm">{text}</p>
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
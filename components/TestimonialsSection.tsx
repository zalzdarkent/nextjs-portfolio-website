"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { useTranslations } from "next-intl";

const CARD_THEMES = [
  {
    bg: "bg-brutal-yellow",
    border: "border-brutal-black",
    textColor: "text-brutal-black",
    badgeBg: "bg-brutal-black text-white",
    mutedColor: "text-black/50",
  },
  {
    bg: "bg-brutal-lime",
    border: "border-brutal-black",
    textColor: "text-brutal-black",
    badgeBg: "bg-brutal-black text-white",
    mutedColor: "text-black/50",
  },
  {
    bg: "bg-brutal-orange",
    border: "border-brutal-black",
    textColor: "text-brutal-black",
    badgeBg: "bg-brutal-white text-brutal-black",
    mutedColor: "text-black/50",
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section ref={ref} className="py-20 border-b-4 border-brutal-black bg-brutal-white overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-14 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-4"
        >
          <span className="font-mono text-sm font-bold text-black/40">✦ //</span>
          <h2 className="font-display text-[clamp(1.25rem,3vw,2rem)] font-extrabold tracking-tight text-brutal-black">
            {t("title")}
          </h2>
          <div className="flex-1 h-[3px] bg-brutal-black" />
        </motion.div>
      </div>

      {/* Marquee Carousel */}
      <div className="group">
        <div className="flex animate-marquee gap-6 px-3 group-hover:[animation-play-state:paused]">
          {doubled.map((item, i) => (
            <TestimonialCard
              key={`${item.id}-${i}`}
              item={item}
              index={i % TESTIMONIALS.length}
              theme={CARD_THEMES[i % CARD_THEMES.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  theme,
}: {
  item: (typeof TESTIMONIALS)[number];
  index: number;
  theme: (typeof CARD_THEMES)[number];
}) {
  const t = useTranslations("testimonials");
  const id = String(item.id);
  const name = t(`list.${id}.name`);
  const initial = name.charAt(0).toUpperCase();

  return (
    <article
      className={`shrink-0 w-[85vw] md:w-[400px] border-4 ${theme.border} ${theme.bg} ${theme.textColor} flex flex-col`}
      style={{ boxShadow: "8px 8px 0px #0a0a0a" }}
    >
      <div className="relative p-6 md:p-8 flex flex-col flex-1">
        <span className={`font-display text-6xl font-black leading-none select-none ${theme.textColor} opacity-10 absolute top-3 right-5`}>
          &ldquo;
        </span>

        <p className={`font-body text-sm md:text-base leading-relaxed mb-6 flex-1 ${theme.textColor} relative z-10`}>
          &ldquo;{t(`list.${id}.text`)}&rdquo;
        </p>

        <div className={`flex items-center gap-4 border-t-4 ${theme.border} pt-5 relative z-10`}>
          <div
            className={`w-12 h-12 border-4 ${theme.border} flex items-center justify-center font-mono font-bold text-base shrink-0 ${theme.badgeBg}`}
          >
            {initial}
          </div>
          <div>
            <p className="font-display font-extrabold text-sm leading-tight">{name}</p>
            <p className={`font-mono text-[10px] uppercase tracking-widest ${theme.mutedColor}`}>
              {t(`list.${id}.role`)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

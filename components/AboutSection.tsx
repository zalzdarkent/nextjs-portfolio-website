"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const STATS = [
  { num: "3+", label: "Tahun Pengalaman" },
  { num: "5+", label: "Proyek Selesai" },
  { num: "5+", label: "Klien Puas" },
  { num: "8", label: "Open Source Repo" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "loading" | "done">("idle");
  const [loadingText, setLoadingText] = useState("GETTING FILE...");

  const handleDownload = async () => {
    if (downloadStatus === "loading") return;

    setDownloadStatus("loading");

    const texts = ["FETCHING CV...", "INJECTING STYLE...", "COMPRESSING BULK..."];
    let textIndex = 0;
    const interval = setInterval(() => {
      if (textIndex < texts.length) {
        setLoadingText(texts[textIndex]);
        textIndex++;
      }
    }, 600);

    try {
      // 💡 PERBAIKAN: Jalur URL disesuaikan dengan nama file baru yang tanpa spasi
      const response = await fetch("/resume/CV_Alif_Fadillah_Ummar.pdf");
      if (!response.ok) throw new Error("File tidak ditemukan");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const tempLink = document.createElement("a");
      tempLink.href = url;

      // 💡 Mengambil nama file asli otomatis ("CV_Alif_Fadillah_Ummar.pdf")
      const fileName = "/resume/CV_Alif_Fadillah_Ummar.pdf".split("/").pop();
      if (fileName) tempLink.download = fileName;

      document.body.appendChild(tempLink);
      tempLink.click();

      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(url);

      clearInterval(interval);
      setDownloadStatus("done");

      setTimeout(() => {
        setDownloadStatus("idle");
        setLoadingText("GETTING FILE...");
      }, 2000);

    } catch (error) {
      console.error(error);
      clearInterval(interval);
      setLoadingText("ERROR FETCHING!");
      setTimeout(() => setDownloadStatus("idle"), 2000);
    }
  };

  return (
    <section
      ref={ref}
      id="about"
      className="px-6 sm:px-10 lg:px-14 py-20 border-b-4 border-brutal-black"
    >
      {/* Section header */}
      <SectionHeader num="01" title="TENTANG SAYA" inView={inView} />

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-5"
        >
          {[
            "Saya adalah Full Stack Developer berbasis di Jakarta, Indonesia. Dengan latar belakang Computer Science dari UI, saya memiliki passion mendalam dalam membangun produk digital yang tidak hanya fungsional tapi juga memiliki pengalaman pengguna yang luar biasa.",
            "Saya percaya bahwa kode yang baik adalah kode yang bisa dibaca manusia, bukan sekadar mesin. Setiap proyek yang saya kerjakan selalu mengedepankan performa, aksesibilitas, dan maintainability jangka panjang.",
            "Di luar koding, saya aktif berkontribusi di komunitas open-source lokal dan berbagi ilmu lewat tulisan teknis di blog pribadi saya.",
          ].map((p, i) => (
            <p key={i} className="font-body text-lg leading-relaxed text-black/70">
              {p}
            </p>
          ))}

          <button
            onClick={handleDownload}
            disabled={downloadStatus === "loading"}
            className={`inline-flex items-center gap-2 mt-4 px-7 py-3.5 border-4 border-brutal-black shadow-brutal font-body font-bold text-sm uppercase tracking-widest transition-all duration-100 cursor-pointer disabled:cursor-not-allowed
        ${downloadStatus === "idle"
                ? "bg-brutal-yellow text-brutal-black hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-hover active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                : downloadStatus === "loading"
                  ? "bg-brutal-orange text-white translate-x-[3px] translate-y-[3px] shadow-brutal-hover animate-pulse" // Efek kaku berkedip pas loading
                  : "bg-brutal-lime text-brutal-black translate-x-[6px] translate-y-[6px] shadow-none" // Amblas rata tanah pas sukses
              }
      `}
          >
            {downloadStatus === "idle" && "Download CV →"}
            {downloadStatus === "loading" && `⚡ ${loadingText}`}
            {downloadStatus === "done" && "✦ SUCCESS DOWNLOADING! ✦"}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 4, y: 4, boxShadow: "2px 2px 0px #0a0a0a" }}
              className="bg-brutal-black text-brutal-white border-4 border-brutal-black shadow-brutal p-6 text-center cursor-default"
              style={{ boxShadow: "6px 6px 0px #0a0a0a" }}
            >
              <span className="font-display text-4xl font-extrabold text-brutal-yellow block">
                {s.num}
              </span>
              <span className="font-body font-bold text-xs uppercase tracking-widest text-white/60 mt-1 block">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({
  num,
  title,
  inView,
  light = false,
}: {
  num: string;
  title: string;
  inView: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      className="flex items-center gap-4"
    >
      <span className={`font-mono text-sm font-bold ${light ? "text-white/40" : "text-black/40"}`}>
        {num} //
      </span>
      <h2
        className={`font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight ${light ? "text-brutal-white" : "text-brutal-black"
          }`}
      >
        {title}
      </h2>
      <div className={`flex-1 h-[3px] ${light ? "bg-white/20" : "bg-brutal-black"}`} />
    </motion.div>
  );
}

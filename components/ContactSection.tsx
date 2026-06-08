"use client";

import { useRef, useState, FormEvent } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./AboutSection";

const CONTACT_LINKS = [
  { icon: "✉", label: "aryo@email.com", href: "mailto:aryo@email.com" },
  { icon: "⌥", label: "github.com/aryokusuma", href: "https://github.com" },
  { icon: "in", label: "linkedin.com/in/aryokusuma", href: "https://linkedin.com" },
  { icon: "𝕏", label: "@aryokusuma", href: "https://twitter.com" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [toast, setToast] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className="bg-brutal-yellow px-6 sm:px-10 lg:px-14 py-20 border-b-4 border-brutal-black"
      >
        <SectionHeader num="04" title="HUBUNGI SAYA" inView={inView} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <p className="font-body text-lg leading-relaxed text-black/70">
              Punya ide proyek yang keren? Atau sekadar ingin ngobrol soal teknologi?
              Saya selalu terbuka untuk kolaborasi baru dan kesempatan menarik.
            </p>
            <p className="font-body text-base text-black/60">
              Biasanya saya membalas dalam 24 jam kerja.
            </p>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3, y: 3, boxShadow: "1px 1px 0px #0a0a0a" }}
                  whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px #0a0a0a" }}
                  className="flex items-center gap-3 px-4 py-3 bg-brutal-white border-3 border-brutal-black font-body font-bold text-brutal-black text-sm no-underline"
                  style={{ boxShadow: "4px 4px 0px #0a0a0a" }}
                >
                  <span className="w-7 text-center text-lg">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {[
              { label: "Nama Lengkap", type: "text", placeholder: "John Doe" },
              { label: "Email", type: "email", placeholder: "john@email.com" },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="font-body font-bold text-xs uppercase tracking-widest">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="bg-brutal-white border-4 border-brutal-black shadow-brutal-sm px-4 py-3 font-body text-base font-medium outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none placeholder:text-black/30"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label className="font-body font-bold text-xs uppercase tracking-widest">
                Pesan
              </label>
              <textarea
                placeholder="Ceritakan proyek impian kamu..."
                required
                rows={5}
                className="bg-brutal-white border-4 border-brutal-black shadow-brutal-sm px-4 py-3 font-body text-base font-medium outline-none resize-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none placeholder:text-black/30"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0px #0a0a0a" }}
              whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0px #0a0a0a" }}
              className="mt-2 px-8 py-4 bg-brutal-black text-brutal-yellow border-4 border-brutal-black font-body font-bold text-sm uppercase tracking-widest"
              style={{ boxShadow: "6px 6px 0px #0a0a0a" }}
            >
              Kirim Pesan ✦
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 bg-brutal-black text-brutal-yellow border-4 border-brutal-black shadow-brutal px-6 py-4 font-body font-bold text-sm"
          >
            ✦ Pesan berhasil dikirim!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

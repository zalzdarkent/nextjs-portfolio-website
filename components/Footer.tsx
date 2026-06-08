export default function Footer() {
  return (
    <footer className="bg-brutal-black px-6 sm:px-10 lg:px-14 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-wrap">
      <span className="font-display text-2xl font-extrabold text-brutal-yellow">ALIF.DEV</span>
      <span className="font-mono text-xs text-white/40">
        © 2025 Alif Fadillah Ummar. Dibangun dengan ♥ dan banyak ☕
      </span>
      <a
        href="#home"
        className="px-5 py-2.5 bg-brutal-yellow text-brutal-black border-3 border-brutal-black shadow-brutal-sm font-body font-bold text-xs uppercase tracking-widest transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-1 active:translate-y-1"
      >
        ↑ Ke Atas
      </a>
    </footer>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type Tag = "web" | "mobile" | "ai" | "fullstack";

export interface Project {
  id: number;
  name: string;
  tags: Tag[];
  bgColor: string;
  emoji: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
}

export interface Tech {
  icon: string;
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Online Test UNSIKA",
    tags: ["web", "fullstack"],
    bgImage: "/projects/online.png",
    shortDesc:
      "Platform manajemen keuangan personal berbasis web dengan fitur tracking pengeluaran cerdas, grafik insight, dan laporan bulanan otomatis.",
    longDesc:
      "DanaKu adalah aplikasi web full-stack untuk membantu pengguna mengelola keuangan pribadi. Dibangun dengan Next.js 14 dan menggunakan AI untuk mengkategorikan transaksi secara otomatis. Mendukung 50+ bank di Indonesia melalui integrasi Open Banking API.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI API", "Chart.js"],
    features: [
      "Kategorisasi transaksi AI-powered",
      "Dashboard real-time",
      "Export laporan PDF",
      "Multi-currency support",
      "Budget alert system",
    ],
    github: "https://github.com",
    live: "https://danaku.dev",
  },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#tech", label: "Keahlian" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#contact", label: "Kontak" },
];

export const FILTER_OPTIONS: { label: string; value: string }[] = [
  { label: "Semua", value: "all" },
  { label: "Web App", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI / ML", value: "ai" },
  { label: "Full Stack", value: "fullstack" },
];

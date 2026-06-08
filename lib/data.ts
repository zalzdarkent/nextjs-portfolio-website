// ─── Types ────────────────────────────────────────────────────────────────────

export type Tag = "web" | "mobile" | "ai" | "fullstack";

export interface Project {
  id: number;
  name: string;
  tags: Tag[];
  image: string;
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
    name: "Tes SEP-T UNSIKA", // Disesuaikan dengan nama asli proyekmu di CV 
    tags: ["web", "fullstack"],
    image: "/projects/onlinetest.png",
    shortDesc:
      "Platform tes SEP-T (Singaperbangsa English Proficiency Test) berbasis web untuk mahasiswa UNSIKA.",
    longDesc:
      "Sistem Tes Online UNSIKA adalah platform komprehensif yang dirancang khusus untuk mendukung proses evaluasi dan ujian di lingkungan Universitas Singaperbangsa Karawang. Dibangun dengan teknologi terdepan, sistem ini menawarkan pengalaman tes online yang aman, efisien, dan user-friendly.",
    tech: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "Shadcn", "MySQL", "Docker"], 
    // 💡 FITUR DIUBAH MURNI DARI README KAMU:
    features: [
      "Manajemen Kategori Tes & Penjadwalan Fleksibel",
      "Sistem Soal Canggih (Pilihan Ganda, Esai, Skala Likert, & Rumus LaTeX)",
      "Media Pendukung (Upload Audio & Gambar untuk Soal)",
      "Keamanan Ujian (Anti-Cheating Deteksi Tab & Sesi Terkunci)",
      "Sistem Auto-Save Jawaban & Timer Real-time",
      "Dashboard Analytics & Scoring Otomatis untuk Soal Objektif",
      "Panel Koreksi Manual Khusus Soal Esai",
    ],
    github: "https://github.com/zalzdarkent/tes_online_unsika",
    live: "https://onlinetest.unsika.ac.id",
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

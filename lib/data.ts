// ─── Types ────────────────────────────────────────────────────────────────────

export type Tag = "web" | "mobile" | "ai" | "ml" | "fullstack";

export interface Project {
  id: number;
  tags: Tag[];
  image: string;
  tech: string[];
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
    tags: ["web", "fullstack"],
    image: "/projects/onlinetest.png",
    tech: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "Shadcn", "MySQL", "Docker"],
    github: "https://github.com/zalzdarkent/tes_online_unsika",
    live: "https://onlinetest.unsika.ac.id",
  },
  {
    id: 2,
    tags: ["web", "fullstack"],
    image: "/projects/absen_aslab.png",
    tech: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "Shadcn", "MySQL", "Docker"],
    github: "https://github.com/zalzdarkent/absensi_aslab_react",
    live: "http://aslab.my.id",
  },
  {
    id: 3,
    tags: ["ai", "ml"],
    image: "/projects/deteksi-apd.png",
    tech: ["Python", "OpenCV", "Yolo", "Flask", "ONNX"],
    github: "https://github.com/zalzdarkent/deteksi_apd_next",
    live: "NULL",
  },
  {
    id: 4,
    tags: ["web", "fullstack"],
    image: "/projects/spicyplay.png",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/zalzdarkent/synth-groovebox", 
    live: "https://onlinetest.unsika.ac.id",
  },
];

export const NAV_LINKS = [
  { href: "#home",       key: "home" },
  { href: "#about",      key: "about" },
  { href: "#tech",       key: "tech" },
  { href: "#portfolio",  key: "portfolio" },
  { href: "#pengalaman", key: "experience" },
  { href: "#education",  key: "education" },
  { href: "#contact",    key: "contact" },
];

export const FILTER_OPTIONS: { key: string; value: string }[] = [
  { key: "all",       value: "all" },
  { key: "web",       value: "web" },
  { key: "mobile",    value: "mobile" },
  { key: "ai",        value: "ai" },
  { key: "fullstack", value: "fullstack" },
];

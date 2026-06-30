# Portfolio Neo-Brutalism — Next.js 14

Website portfolio pribadi dengan gaya **Neo-Brutalism** ekstrem menggunakan:

- **Next.js 14** (App Router)
- **Tailwind CSS** (custom brutal tokens)
- **Framer Motion** (animasi & micro-interactions)
- **TypeScript**

---

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production

```bash
npm run build
npm run start
```

---

## 📁 Struktur Proyek

```
portfolio/
├── app/
│   ├── globals.css        # CSS global + Tailwind directives
│   ├── layout.tsx         # Root layout + font setup
│   └── page.tsx           # Halaman utama (assembles semua section)
├── components/
│   ├── Navbar.tsx         # Navigasi + mobile drawer
│   ├── HeroSection.tsx    # Hero dengan profile card
│   ├── Marquee.tsx        # Ticker marquee berjalan
│   ├── AboutSection.tsx   # Tentang + statistik
│   ├── TechSection.tsx    # Tech stack showcase
│   ├── PortfolioSection.tsx  # Grid proyek + filter
│   ├── ProjectModal.tsx   # Modal detail proyek
│   ├── ContactSection.tsx # Form kontak + toast
│   ├── Footer.tsx         # Footer
│   └── CustomCursor.tsx   # Kursor kustom
├── lib/
│   └── data.ts            # Data proyek, tech stack, nav links
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

---

## ✏️ Cara Kustomisasi

### Ganti data pribadi

Edit file **`lib/data.ts`** untuk:
- Mengganti proyek portofolio (`PROJECTS`)
- Menambah/hapus tech stack (`TECHS`)
- Mengubah link navigasi (`NAV_LINKS`)

### Ganti nama & bio

Cari teks `"Alif"` dan `"Alif.DEV"` di semua file komponen, lalu ganti sesuai nama kamu.

### Ubah warna tema

Edit `tailwind.config.ts` bagian `colors.brutal`:

```ts
brutal: {
  yellow: "#FDE047",   // Warna utama
  orange: "#FF6B35",   // Aksen 1
  lime:   "#BFFF00",   // Aksen 2
  pink:   "#FF3CAC",   // Aksen 3
  blue:   "#3B82F6",   // Aksen 4
  black:  "#0a0a0a",   // Border & teks
  white:  "#FAFAF8",   // Background
}
```

---

## 🎨 Fitur Neo-Brutalism

| Fitur | Detail |
|---|---|
| Border tebal | `border-3` / `border-4` (3–4px) solid hitam di semua elemen |
| Hard shadow | `shadow-brutal` = `6px 6px 0px #0a0a0a` tanpa blur |
| Press effect | `whileHover` + `whileTap` Framer Motion → shadow collapse |
| Warna kontras | Yellow, Lime, Orange, Pink di atas White/Black |
| Typography | Syne 800 (display) + Space Grotesk 700 (body) + IBM Plex Mono |
| Marquee | Ticker berjalan animasi CSS infinite |
| Filter portofolio | Real-time filter dengan `AnimatePresence` |
| Mobile drawer | Slide-down dengan spring animation |
| Modal proyek | Pop-up interaktif dengan detail lengkap |
| Custom cursor | Dot hitam dengan blend-mode difference |
| Scroll animations | `useInView` + stagger per section |

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-glitch)", "monospace"],        // Judul hancur berdistorsi ⚡
        body: ["var(--font-special-elite)", "monospace"],    // Deskripsi mesin tik bleber 🖋️
        mono: ["var(--font-vt323)", "monospace"],            // Tag pixel kaku 👾
      },
      colors: {
        brutal: {
          yellow: "#FDE047",
          orange: "#FF6B35",
          lime: "#BFFF00",
          pink: "#FF3CAC",
          blue: "#3B82F6",
          black: "#0a0a0a",
          white: "#FAFAF8",
          red: "#FF0000",
        },
      },
      boxShadow: {
        brutal: "6px 6px 0px #0a0a0a",
        "brutal-lg": "8px 8px 0px #0a0a0a",
        "brutal-sm": "4px 4px 0px #0a0a0a",
        "brutal-hover": "3px 3px 0px #0a0a0a",
        "brutal-dark": "6px 6px 0px #555555",
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
      },
    },
  },
  plugins: [],
};

export default config;

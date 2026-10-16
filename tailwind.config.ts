import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1A1A2E",
          deep: "#0F0F1A",
          surface: "#151525",
          light: "#2D2D44",
        },
        amber: {
          molten: "#E8A838",
          spark: "#D4622B",
          glow: "#F5A623",
          light: "#FAD082",
        },
        steel: {
          white: "#F5F5F0",
          light: "#E8E8E8",
          grey: "#8B8B8B",
          dark: "#2A2A38",
        },
        brand: {
          whatsapp: "#25D366",
          "whatsapp-hover": "#20BA59",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "Bebas Neue", "sans-serif"],
        devanagari: [
          "var(--font-noto-devanagari)",
          "Noto Sans Devanagari",
          "sans-serif",
        ],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        "metallic-radial":
          "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(232, 168, 56, 0.35) 0%, rgba(212, 98, 43, 0.15) 35%, transparent 70%)",
        "molten-gradient":
          "linear-gradient(135deg, #FFF0D4 0%, #E8A838 40%, #D4622B 80%, #8A3E14 100%)",
        "steel-gradient":
          "linear-gradient(135deg, #FFFFFF 0%, #E8E8E8 40%, #8B8B8B 80%, #4A4A5A 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ================= FONT ================= */
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],

      },

      /* ================= COLORS ================= */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        hero: {
          grey: "hsl(var(--hero-text-grey))",
          red: "hsl(var(--hero-red))",
          bg: "hsl(var(--hero-bg))",
        },
      },

      /* ================= BORDER RADIUS ================= */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ================= KEYFRAMES ================= */
      keyframes: {
        /* existing animations */
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "text-rotate": {
          "0%, 20%": { transform: "translateY(0)" },
          "25%, 45%": { transform: "translateY(-100%)" },
          "50%, 70%": { transform: "translateY(-200%)" },
          "75%, 95%": { transform: "translateY(-300%)" },
          "100%": { transform: "translateY(-300%)" },
        },
        "dot-slide": {
          "0%, 20%": { transform: "translateX(0)", opacity: "1" },
          "22%": { transform: "translateX(-100px)", opacity: "0" },
          "24%": { transform: "translateX(50px)", opacity: "0" },
          "27%, 45%": { transform: "translateX(0)", opacity: "1" },
          "47%": { transform: "translateX(-100px)", opacity: "0" },
          "49%": { transform: "translateX(50px)", opacity: "0" },
          "52%, 70%": { transform: "translateX(0)", opacity: "1" },
          "72%": { transform: "translateX(-100px)", opacity: "0" },
          "74%": { transform: "translateX(50px)", opacity: "0" },
          "77%, 100%": { transform: "translateX(0)", opacity: "1" },
        },
        "swipe-reveal": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "bg-fade-1": {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bg-fade-2": {
          "0%, 45%": { opacity: "0" },
          "50%, 95%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        /* 🔥 NEW: LOGOS (HORIZONTAL) */
        moveLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        moveRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },

        /* 🔥 NEW: REVIEWS (VERTICAL) */
        moveUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        moveDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        "scroll-up": "scroll-up 6s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-rotate": "text-rotate 6s ease-in-out infinite",
        "dot-slide": "dot-slide 6s ease-in-out infinite",
        "swipe-reveal": "swipe-reveal 1.5s ease forwards",
        "bg-fade-1": "bg-fade-1 10s ease-in-out infinite",
        "bg-fade-2": "bg-fade-2 10s ease-in-out infinite",

        /* 🔥 LOGOS */
        "move-left": "moveLeft 15s linear infinite",
        "move-right": "moveRight 15s linear infinite",

        /* 🔥 REVIEWS */
        "move-up": "moveUp 25s linear infinite",
        "move-down": "moveDown 25s linear infinite",

        /* 🚀 ENHANCED ANIMATIONS */
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up-delay-1": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
        "fade-in-up-delay-2": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
        "fade-in-up-delay-3": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
        "fade-in-up-delay-4": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "nav-slide-down": "navSlideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

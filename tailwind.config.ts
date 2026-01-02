import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
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
        // CYXOR Brand Colors
        mint: {
          DEFAULT: "hsl(var(--mint-teal))",
          soft: "hsl(var(--mint-teal-soft))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy-deep))",
          charcoal: "hsl(var(--charcoal-navy))",
        },
        slate: {
          blue: "hsl(var(--slate-blue))",
        },
        cool: {
          grey: "hsl(var(--cool-grey))",
          text: "hsl(var(--cool-grey-text))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(11, 42, 63, 0.05), 0 2px 4px -1px rgba(11, 42, 63, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(11, 42, 63, 0.08), 0 10px 10px -5px rgba(11, 42, 63, 0.04)',
        'cta': '0 4px 14px 0 rgba(78, 195, 165, 0.35)',
        'cta-hover': '0 6px 20px 0 rgba(78, 195, 165, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

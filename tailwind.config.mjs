/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      // Fluid styles generated from https://utopia.fyi/
      fontSize: {
        "fluid--2": "clamp(0.7035rem, 0.8083rem + -0.1353vi, 0.7813rem)",
        "fluid--1": "clamp(0.9375rem, 0.9374rem + 0.0004vi, 0.9377rem)",
        "fluid-0": "clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem)",
        "fluid-1": "clamp(1.35rem, 1.24rem + 0.55vi, 1.6663rem)",
        "fluid-2": "clamp(1.62rem, 1.4109rem + 1.0454vi, 2.2211rem)",
        "fluid-3": "clamp(1.944rem, 1.5904rem + 1.7682vi, 2.9607rem)",
        "fluid-4": "clamp(2.3328rem, 1.7715rem + 2.8067vi, 3.9467rem)",
        "fluid-5": "clamp(2.7994rem, 1.9432rem + 4.281vi, 5.2609rem)",
      },
      spacing: {
        "fluid-3xs": "clamp(0.3125rem, 0.3125rem + 0vi, 0.3125rem)",
        "fluid-2xs": "clamp(0.5625rem, 0.5408rem + 0.1087vi, 0.625rem)",
        "fluid-xs": "clamp(0.875rem, 0.8533rem + 0.1087vi, 0.9375rem)",
        "fluid-s": "clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem)",
        "fluid-m": "clamp(1.6875rem, 1.6223rem + 0.3261vi, 1.875rem)",
        "fluid-l": "clamp(2.25rem, 2.163rem + 0.4348vi, 2.5rem)",
        "fluid-xl": "clamp(3.375rem, 3.2446rem + 0.6522vi, 3.75rem)",
        "fluid-2xl": "clamp(4.5rem, 4.3261rem + 0.8696vi, 5rem)",
        "fluid-3xl": "clamp(6.75rem, 6.4891rem + 1.3043vi, 7.5rem)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};

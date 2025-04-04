/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#E6B15D",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#025463",
          foreground: "hsl(var(--secondary-foreground))",
        },
        darkSecondary: {
          DEFAULT: "#6b7280",
          foreground: "hsl(var(--darkSecondary-foreground))",
        },
        qora: {
          DEFAULT: "#181818",
          foreground: "hsl(var(--muted-foreground))",
        },
        kulrang: {
          DEFAULT: "#5B5B5B",
          foreground: "hsl(var(--accent-foreground))",
        },
        sariq: {
          DEFAULT: "#E6B05D",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        cinzel: ["'Cinzel Decorative'", ...fontFamily.serif],
        cormorant: ["'Cormorant Upright'", ...fontFamily.serif],
        inter: ["'Inter'", ...fontFamily.serif],
        josefinSans: ["'Josefin Sans'", ...fontFamily.serif],
      },
      fontSize: {
        biggest: "44px",
        middleSize: "32px",
        cormorantBig: "24px",
        yigirma: "20px",
        cormorantSmall: "18px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".hover-effect": {
          "&:hover": {
            color: "#E6B15D",
          },
        },
      });
    },
    function ({ addBase }) {
      addBase({
        "html": { scrollBehavior: "smooth" },
        "::-webkit-scrollbar": { width: "8px", height: "8px" },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "theme(colors.secondary)",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
        ".dark ::-webkit-scrollbar-thumb": {
          backgroundColor: "theme(colors.darkSecondary)",
        },
        ".dark ::-webkit-scrollbar-track": {
          backgroundColor: "#1f2937",
        },
      });
    },
  ],
};

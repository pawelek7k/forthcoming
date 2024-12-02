import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dark-primary-bg": " radial-gradient(70% 53% at 36% 76%, #4c0519 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #18181b 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #18181b 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #18181b 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #18181b 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #09090b 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #09090b 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #09090b 24%, #073AFF00 100%),linear-gradient(125deg, #09090b 1%, #09090b 100%);",
        "home-img": "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url('/images/library.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

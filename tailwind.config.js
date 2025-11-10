/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // biru gelap (navy)
        surface: "#1e293b",    // slate abu gelap
        accent: "#38bdf8",     // biru cyan terang
        textPrimary: "#f1f5f9", // putih keabu-abuan
        textSecondary: "#94a3b8", // abu muda
      },
    },
  },
  plugins: [],
};

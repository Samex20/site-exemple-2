/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e1116",
        graphite: "#1f2328",
        mist: "#f6f5f2",
        frost: "#f9f9f7",
        accent: {
          DEFAULT: "#1f7a8c",
          soft: "#dff3f1",
          punch: "#ff5d5d"
        },
        neutralink: "#3a3f46"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(14, 17, 22, 0.45)",
        glow: "0 15px 45px -25px rgba(31, 122, 140, 0.5)",
        punch: "0 15px 40px -20px rgba(255, 93, 93, 0.5)"
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,%3Csvg width=\"120\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\" x=\"0\" y=\"0\" width=\"1\" height=\"1\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.08\"/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};

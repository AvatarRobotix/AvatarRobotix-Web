/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use class strategy for dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Adjust this if your files are in different locations
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': `
          radial-gradient(circle at center center, #10082b, #a68eff),
          repeating-radial-gradient(circle at center center, #10082b, #10082b, 50px, transparent 80px, transparent 80px)
        `,
      },
      colors: {
        'custom-bg': '#e5e5f7',
      },
      backgroundBlendMode: {
        'multiply': 'multiply',
      },
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/tourland-bg-hero.jpg?alt=media&token=f437e756-29d4-4abd-a0db-c1d3cb4e7c04')",
      }
    },
  },
  plugins: [],
};

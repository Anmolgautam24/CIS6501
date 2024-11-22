// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366', // Main text color (phoenix-dark-blue)
        secondary: '#003F4E', // Footer background color (phoenix-dark-teal)
        accent: '#DDA53A', // Accent color for "Project Sites" (phoenix-gold)
        light: '#E6F7F9', // LinkedIn icon background color (phoenix-light-teal)
      },
    },
  },
  plugins: [],
}

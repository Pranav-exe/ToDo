/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f172a', // Slate 900
          800: '#1e293b', // Slate 800
        },
        charcoal: '#1e293b',
        primary: {
          DEFAULT: '#8b5cf6', // Violet 500
          hover: '#7c3aed',   // Violet 600
        },
        secondary: {
          DEFAULT: '#06b6d4', // Cyan 500
          hover: '#0891b2',   // Cyan 600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, #0f172a, #1e293b)',
        'accent-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      }
    },
  },
  plugins: [],
}

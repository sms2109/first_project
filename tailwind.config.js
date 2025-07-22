    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html", // Important for Vite projects
        "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src
      ],
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'], // Custom font for consistency
          },
          animation: {
            fadeIn: 'fadeIn 1s ease-out forwards',
            slideInUp: 'slideInUp 0.8s ease-out forwards',
            pulse: 'pulse 2s infinite ease-in-out',
            scaleX: 'scaleX 0.3s ease-out forwards', // For Navbar underline
          },
          keyframes: {
            fadeIn: {
              'from': { opacity: '0' },
              'to': { opacity: '1' },
            },
            slideInUp: {
              'from': { transform: 'translateY(20px)', opacity: '0' },
              'to': { transform: 'translateY(0)', opacity: '1' },
            },
            pulse: {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
            },
            scaleX: {
              'from': { transform: 'scaleX(0)' },
              'to': { transform: 'scaleX(1)' },
            }
          }
        },
      },
      plugins: [],
    }
    
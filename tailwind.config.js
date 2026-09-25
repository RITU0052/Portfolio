/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#090d16",
        surface: {
          DEFAULT: "#0f172a",
          card: "#131c31",
          hover: "#1e293b",
          border: "#1e293b",
        },
        accent: {
          blue: "#38bdf8",
          indigo: "#6366f1",
          purple: "#8b5cf6",
          pink: "#ec4899",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
      }
    },
  },
  plugins: [],
}

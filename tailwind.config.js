/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./aboutus.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust based on your file structure
  ],
  theme: {
    extend: {
        colors: {
            primary: '#1e3a8a',
            primaryLight: '#3b82f6',
            secondary: '#0ea5e9',
            accent: '#f59e0b',
            // accent: '#dc2626',
            dark: '#0f172a',
            light: '#f8fafc',
            success: '#10b981',
            danger: '#ef4444',
            gray100: '#f1f5f9',
            gray200: '#e2e8f0',
            gray300: '#cbd5e1',
            gray700: '#334155',
        },
        boxShadow: {
            'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
        }

    },
  },
  plugins: [],
}

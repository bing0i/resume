/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#05070f',
          100: '#0b1020',
          200: '#13182a',
          300: '#1e2640',
          400: '#2d3550',
          500: '#47506b',
          600: '#64748b',
          700: '#94a3b8',
          800: '#cbd5e1',
          900: '#e2e8f0',
          950: '#fffdf5',
        },
        accent: {
          DEFAULT: '#b45309',
          soft: '#d97706',
          glow: '#eab308',
          deep: '#78350f',
          ink: '#451a03',
        },
        cream: '#fffdf5',
        sand: '#fde047',
        paper: '#ffffff',
        border: '#d4a017',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.08), 0 18px 40px -22px rgba(120, 53, 15, 0.35)',
        pop: '0 22px 60px -24px rgba(180, 83, 9, 0.55)',
        ink: '0 16px 48px -22px rgba(11, 16, 32, 0.55)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        marqueeX: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmerBar: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slamIn: {
          '0%': {
            transform: 'skewX(-14deg) translateX(-40px) scaleX(1.1)',
            opacity: 0,
          },
          '55%': {
            transform: 'skewX(4deg) translateX(6px) scaleX(0.98)',
            opacity: 1,
          },
          '100%': {
            transform: 'skewX(0deg) translateX(0) scaleX(1)',
            opacity: 1,
          },
        },
        slideMask: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        underlineZoom: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        tiltIn: {
          '0%': {
            transform: 'perspective(1000px) rotateX(-18deg) translateY(30px)',
            opacity: 0,
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(0) translateY(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.85s ease-in-out infinite',
        marqueeX: 'marqueeX 22s linear infinite',
        shimmerBar: 'shimmerBar 3.2s ease-in-out infinite',
        slamIn: 'slamIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        slideMask: 'slideMask 1.1s cubic-bezier(0.65, 0, 0.35, 1) both',
        tiltIn: 'tiltIn 0.95s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

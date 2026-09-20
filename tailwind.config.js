/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#0B1220',
          100: '#0F172A',
          200: '#1E293B',
          300: '#334155',
          400: '#475569',
          500: '#64748B',
          600: '#94A3B8',
          700: '#CBD5E1',
          800: '#E2E8F0',
          900: '#F1F5F9',
          950: '#FFFBEB',
        },
        accent: {
          DEFAULT: '#F59E0B',
          soft: '#FBBF24',
          glow: '#FCD34D',
          deep: '#B45309',
          muted: '#F59E0B1A',
        },
        cream: '#FFFDF7',
        sand: '#FDE68A',
        paper: '#FFFFFF',
        border: '#E2E8F0',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 10px 30px -18px rgba(245, 158, 11, 0.22)',
        pop: '0 24px 60px -22px rgba(245, 158, 11, 0.45)',
        ring: '0 0 0 1px rgba(245, 158, 11, 0.32)',
        paper: '0 1px 3px rgba(15, 23, 42, 0.06), 0 18px 44px -24px rgba(15, 23, 42, 0.16)',
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marqueeX: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmerBar: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideMask: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        underlineZoom: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        marqueeX: 'marqueeX 26s linear infinite',
        shimmerBar: 'shimmerBar 3.2s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        slideMask: 'slideMask 1.1s cubic-bezier(0.65, 0, 0.35, 1) both',
        gentleFloat: 'gentleFloat 4.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

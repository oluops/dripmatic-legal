/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          hover: '#b8923e',
        },
        surface: {
          primary: '#0a0a0a',
          secondary: '#111111',
          elevated: '#1a1a1a',
        },
        content: {
          primary: '#f0ece4',
          secondary: '#888888',
          muted: '#555555',
        },
        border: {
          DEFAULT: '#2a2a2a',
          active: '#333333',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2rem, 5vw, 3.5rem)',
        h2: 'clamp(1.5rem, 3vw, 2.25rem)',
      },
      letterSpacing: {
        wide: '2.5px',
        button: '1.5px',
      },
      borderRadius: {
        card: '12px',
        btn: '14px',
        phone: '20px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.3)',
        elevated: '0 8px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

/**
 * Brand palette is intentionally the stock Tailwind indigo/purple/slate
 * scales — the existing brand hexes (#4f46e5, #6366f1, #a855f7, #0f172a,
 * #1e293b) already are indigo-600/500, purple-500, slate-900/800. Aliasing
 * them as `brand`/`accent`/`ink` just gives semantic names to reach for.
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}', './mdx-components.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        ink: {
          950: '#0b0d1f',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          400: '#94a3b8',
          300: '#cbd5e1',
        },
      },
      fontFamily: {
        // display/label are kept as aliases of the same sans stack (Plus
        // Jakarta Sans) so globals.css's existing font-display/font-label
        // utility usages didn't need a mechanical rename — one grotesk,
        // varied by weight, everywhere.
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        label: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 3rem + 2vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.25rem, 2.4rem + 1.6vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.75rem, 1.9rem + 1vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.005em' }],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.05)',
        card: '0 1px 2px rgba(49, 46, 129, 0.04), 0 8px 24px -8px rgba(49, 46, 129, 0.08)',
        'card-hover': '0 4px 12px -2px rgba(79, 70, 229, 0.12), 0 24px 48px -16px rgba(79, 70, 229, 0.18)',
        glow: '0 0 0 1px rgba(129, 140, 248, 0.24), 0 0 32px -4px rgba(99, 102, 241, 0.45)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      // The fade-up / hero-in / drift / glow-breathe keyframes this theme
      // implies are declared as literal `@keyframes` in globals.css instead
      // of here — they're consumed via hand-written `animation:` CSS, not
      // `animate-*` utility classes, so Tailwind would never scan-detect
      // and emit them from this config.
      transitionTimingFunction: {
        swift: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;

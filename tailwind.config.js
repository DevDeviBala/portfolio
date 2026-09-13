import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        ink: '#0B0F14',
        surface: '#10161D',
        'surface-2': '#161E26',
        line: '#232E39',

        // Text scale
        text: {
          DEFAULT: '#E6EDF3',
          muted: '#8B98A5',
          faint: '#5A6773',
        },

        // Python palette (primary accents)
        'py-blue': '#3776AB',
        'py-blue-bright': '#4B8BBE',
        'py-blue-dim': '#1E3A5F',
        'py-yellow': '#FFD43B',
        'py-yellow-dim': '#3D3319',

        // Semantic
        success: '#4CAF50',
        error: '#F14C4C',
        'error-dim': '#4A1E1E',

        // Legacy aliases → remap old tokens to Python colours.
        // Existing components keep working without any edits.
        trace: {
          DEFAULT: '#3776AB',
          dim: '#1E3A5F',
        },
        redline: {
          DEFAULT: '#F14C4C',
          dim: '#4A1E1E',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-public-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        wrap: '1180px',
      },
      borderRadius: {
        DEFAULT: '3px',
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(76, 175, 80, 0.45)' },
          '70%': { boxShadow: '0 0 0 7px rgba(76, 175, 80, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(76, 175, 80, 0)' },
        },
        fadein: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        dash: {
          from: { strokeDashoffset: '220' },
          to: { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        pulse: 'pulse 2.4s infinite',
        fadein: 'fadein .25s ease',
        dash: 'dash 1.6s ease forwards',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};

export default config;
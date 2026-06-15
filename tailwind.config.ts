import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        base: {
          DEFAULT: '#0A0A0A',
          alt: '#131314',
        },
        // Card surface
        surface: {
          DEFAULT: '#0A0A0B',
        },
        // Primary accent: amber/orange gradient family
        amber: {
          brand: '#ff6b00',
          light: '#ffb693',
          mid: '#ff8c38',
          glow: 'rgba(255,107,0,0.15)',
        },
        // Secondary accent: soft blue
        blue: {
          brand: '#4b8eff',
          light: '#adc6ff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      spacing: {
        'section-gap': '160px',
        'section-gap-mobile': '96px',
        'container-max': '1200px',
      },
      maxWidth: {
        'container': '1200px',
      },
      backgroundImage: {
        'gradient-amber': 'linear-gradient(135deg, #ff6b00, #ffb693)',
        'gradient-amber-radial': 'radial-gradient(circle, rgba(255,107,0,0.2) 0%, transparent 70%)',
        'gradient-blue-radial': 'radial-gradient(circle, rgba(75,142,255,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'amber-glow': '0 0 80px rgba(255,107,0,0.15)',
        'amber-glow-sm': '0 0 30px rgba(255,107,0,0.2)',
        'blue-glow': '0 0 30px rgba(75,142,255,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config

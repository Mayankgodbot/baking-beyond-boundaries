/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFBF5',
          100: '#FDF3E7',
          200: '#F5DFC4',
          300: '#E8C89A',
          400: '#D4A66D',
          500: '#A67C52',
          600: '#8B6542',
          700: '#6F4F34',
          800: '#533A27',
          900: '#3A281B',
        },
        secondary: {
          50: '#F2F7EE',
          100: '#E1EDDA',
          200: '#C4DDB6',
          300: '#9EC78A',
          400: '#7EAD66',
          500: '#6B8E5A',
          600: '#547145',
          700: '#425834',
          800: '#324126',
          900: '#232D1A',
        },
        accent: {
          50: '#FFFCF0',
          100: '#FFF6D6',
          200: '#FFECAB',
          300: '#FFE080',
          400: '#F0C850',
          500: '#D4A853',
          600: '#B38A3A',
          700: '#8C6D2E',
          800: '#6B5323',
          900: '#4A3A18',
        },
        cream: {
          DEFAULT: '#FFFBF5',
          50: '#FFFFFF',
          100: '#FFFBF5',
          200: '#FFF8F0',
          300: '#FFF0DE',
          400: '#FFE5C7',
          500: '#FFDAAE',
        },
        dark: {
          DEFAULT: '#2C1810',
          light: '#4A3228',
          lighter: '#6B4F3E',
          dark: '#1A0E09',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(166, 124, 82, 0.15)',
        'warm-lg': '0 8px 40px rgba(166, 124, 82, 0.2)',
        'warm-xl': '0 16px 60px rgba(166, 124, 82, 0.25)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
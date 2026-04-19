/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF4',
          100: '#F9F3E3',
          200: '#F2E8CC',
          300: '#E8D9B0',
          400: '#D4BE8A',
          500: '#BFA06A',
          600: '#A07840',
          700: '#7D5A2A',
          800: '#5C3E1A',
          900: '#3D2510',
        },
        warm: {
          50: '#FBF7F4',
          100: '#F5EDE6',
          200: '#EAD9CB',
          300: '#D4B99A',
          400: '#BA9068',
          500: '#9B6E40',
          600: '#7A5030',
          700: '#5C3820',
          800: '#3D2410',
          900: '#1F1008',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

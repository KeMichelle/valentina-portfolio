/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#F5F2EC',
        sand:     '#DDD4C8',
        clay:     '#B7A48F',
        olive:    '#7A7E63',
        moss:     '#4E5642',
        charcoal: '#262624',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light:    '300',
        regular:  '400',
        medium:   '500',
        semibold: '600',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      lineHeight: {
        editorial: '1.15',
      },
    },
  },
  plugins: [],
}
